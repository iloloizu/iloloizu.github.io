import React, { useEffect, useRef, useState } from 'react'
import './city-runner.css'
import { GameAudio } from './runnerAudio'

const CITIES = [ { name: 'New York City', tile: 3, enemies: [[0,0],[0,1]] }, { name: 'Philadelphia', tile: 2, enemies: [[1,2],[0,1]] }, { name: 'Denver', tile: 1, enemies: [[1,0],[1,1]] }, { name: 'College Station', tile: 0, enemies: [[0,2],[1,1]] }, { name:'Bethesda Terrace', tile:null, enemies:[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]] } ]
const BASE = `${process.env.PUBLIC_URL}/city-runner/`
const BEST = 'ilolo-city-runner-best-v1'
const STARTING_LIVES = 3
const CONTACT_INSET = 3
const intersects = (a,b) => a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y

function loadAtlas(file, player=false, duck=false, props=false) {
 return new Promise((resolve,reject)=>{
  const image = new Image(); image.onerror=reject; image.onload=()=>{
   const sheet=document.createElement('canvas'); sheet.width=image.width; sheet.height=image.height; const c=sheet.getContext('2d'); c.drawImage(image,0,0)
   const data=c.getImageData(0,0,sheet.width,sheet.height), px=data.data
   if(!player) { for(let i=0;i<px.length;i+=4) if(px[i]>px[i+1]*1.6+30&&px[i+2]>px[i+1]*1.6+30) px[i+3]=0; c.putImageData(data,0,0) }
   const frames=[], bounds=[0,196,451,656,905,1122,1321,1528,1774], rows=[0,325,690,1024]
   for(let row=0;row<(duck||props?2:player?1:3);row++) { frames[row]=[]; for(let col=0;col<(player?8:props?3:4);col++) {
    const x0=Math.round(player?bounds[col]*sheet.width/1774:col*sheet.width/(props?3:4)), x1=Math.round(player?bounds[col+1]*sheet.width/1774:(col+1)*sheet.width/(props?3:4)), y0=duck||props?row*sheet.height/2:player?0:Math.round(rows[row]*sheet.height/1024), y1=duck||props?(row+1)*sheet.height/2:player?Math.round(sheet.height/2):Math.round(rows[row+1]*sheet.height/1024)
    let left=x1,top=y1,right=x0,bottom=y0
    for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++)if(px[(y*sheet.width+x)*4+3]>80){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y)}
    frames[row].push({x:left,y:top,w:right-left+1,h:bottom-top+1})
   }} resolve({sheet,frames})
  };image.src=BASE+file
 })
}

function loadTerrain(){
 return new Promise((resolve,reject)=>{const image=new Image();image.onerror=reject;image.onload=()=>{
  const sheet=document.createElement('canvas');sheet.width=image.width;sheet.height=image.height;const ctx=sheet.getContext('2d');ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,sheet.width,sheet.height).data,frames=[];
  for(let row=0;row<5;row++){frames[row]=[];for(let col=0;col<3;col++){
   const columns=[0,.466,.803,1],rows=[0,.22,.417,.604,.766,1];const x0=Math.round(columns[col]*sheet.width),x1=Math.round((row===0&&col===1?.78:columns[col+1])*sheet.width),y0=Math.round(rows[row]*sheet.height),y1=Math.round(rows[row+1]*sheet.height);let left=x1,top=y1,right=x0,bottom=y0;
   for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++)if(pixels[(y*sheet.width+x)*4+3]>80){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y)}
   // Contact plane is the first solid row across the central footprint,
   // rather than the highest decorative grass/rust pixel in the crop.
   let surface=top;const innerLeft=Math.ceil(left+(right-left)*.15),innerRight=Math.floor(right-(right-left)*.15);
   for(let y=top;y<=bottom;y++){let solid=0;for(let x=innerLeft;x<=innerRight;x++)if(pixels[(y*sheet.width+x)*4+3]>80)solid++;if(solid/(innerRight-innerLeft+1)>=.95){surface=y;break}}
   frames[row].push({x:left,y:top,w:Math.max(1,right-left+1),h:Math.max(1,bottom-top+1),surface:surface-top})
  }}resolve({sheet,frames})
 };image.src=BASE+'terrain-worlds.png'})
}

export default function EdHurdles(){
 const audioRef=useRef(null)
 const [audioSettings,setAudioSettings]=useState(()=>{try{return {...{music:true,ambience:true,effects:true},...JSON.parse(localStorage.getItem('izu-runner-audio')||'{}')}}catch{return {music:true,ambience:true,effects:true}}})
 function changeAudio(channel){const next={...audioSettings,[channel]:!audioSettings[channel]};setAudioSettings(next);if(audioRef.current){audioRef.current.enabled=next;audioRef.current.stop(channel)}try{localStorage.setItem('izu-runner-audio',JSON.stringify(next))}catch{}}
 const cogRef=useRef(null), settingsRef=useRef(null)
 const canvasRef=useRef(null), engine=useRef(null), outfitRef=useRef('jacket')
 const [scores,setScores]=useState([])
 const [settings,setSettings]=useState(false)
 const [phase,setPhase]=useState('loading'),[outfit,setOutfit]=useState('jacket'),[hud,setHud]=useState({score:0,best:0,city:'New York City',lives:STARTING_LIVES,kills:0,distance:0})
 function closeSettings(){setSettings(false);cogRef.current?.focus()}
 useEffect(()=>{if(settings)settingsRef.current?.focus()},[settings])
 useEffect(()=>{
  const audio=new GameAudio();audio.enabled={...audioSettings};audioRef.current=audio
  function unlockAudio(){try{audio.context ||= audio.createContext();audio.context.resume().catch(()=>{})}catch{}}
  const canvas=canvasRef.current,ctx=canvas.getContext('2d'); let alive=true,raf,last=0,assets,visible=true,w=800,h=400
  let g={phase:'loading',distance:0,kills:0,time:0,y:0,grounded:true,vy:0,jumps:0,cooldown:0,punch:0,spawn:1.4,platformTimer:0.6,platforms:[],duck:false,enemies:[],waves:[],best:0,startCity:0,lives:STARTING_LIVES,invincible:0,pickups:[],pizzaAt:35+Math.random()*35,obstacles:[],obstacleTimer:2.8,recorded:false}
  try{g.best=Number(localStorage.getItem(BEST))||0}catch{}
  let history=[];try{const saved=JSON.parse(localStorage.getItem('izu-runner-scores')||'[]');if(Array.isArray(saved))history=saved.filter(r=>Number.isFinite(r.score)).slice(0,3)}catch{}
  setScores(history)
  const cityIndex=()=> (g.startCity+Math.floor(g.distance/6500))%CITIES.length
  function saveRun(){if(g.recorded)return;g.recorded=true;history=[...history,{score:score(),city:CITIES[g.startCity].name,kills:g.kills,distance:Math.floor(g.distance/10)}].sort((a,b)=>b.score-a.score).slice(0,3);setScores(history);try{localStorage.setItem('izu-runner-scores',JSON.stringify(history))}catch{}}
  const score=()=>Math.floor(g.distance/10)+g.kills*25
  function status(p){g.phase=p;setPhase(p);audio.setScene(CITIES[cityIndex()].name,p==='run')}
  function updateHud(){setHud({score:score(),best:g.best,city:CITIES[cityIndex()].name,lives:g.lives,kills:g.kills,distance:Math.floor(g.distance/10)})}
  function start(){if(!assets||!['ready','over'].includes(g.phase))return;if(g.phase==='over'&&g.lives>0){continueRun();return}if(g.phase==='over')saveRun();const startCity=g.phase==='ready'?g.startCity:(cityIndex()+1+Math.floor(Math.random()*(CITIES.length-1)))%CITIES.length;unlockAudio();g={...g,startCity,lives:STARTING_LIVES,invincible:0,pickups:[],pizzaAt:35+Math.random()*35,obstacles:[],obstacleTimer:2.8,recorded:false,distance:0,kills:0,time:0,y:0,grounded:true,vy:0,jumps:0,cooldown:0,punch:0,spawn:1.4,platformTimer:0.6,platforms:[],duck:false,enemies:[],waves:[]};status('run');updateHud();canvas.focus()}
  function jump(){if(g.phase!=='run')return;g.duck=false;if(g.jumps<2){g.grounded=false;g.vy=440;g.jumps++;audio.effect(620,.1)}}
  function punch(){if(g.phase!=='run'||g.cooldown>0)return;audio.effect(170,.16);g.cooldown=.42;g.punch=.22;g.waves.push({x:Math.min(110,w*.23)+20,y:h-70-g.y-(g.duck?26:44),w:32,h:48,life:.8})}
  function pause(){g.duck=false;if(g.phase==='run')status('paused')}
  function continueRun(){if(g.phase!=='over'||g.lives<1)return;g.lives--;g.invincible=3;g.duck=false;g.enemies=g.enemies.filter(e=>Math.abs(e.x-Math.min(110,w*.23))>130);g.obstacles=g.obstacles.filter(o=>Math.abs(o.x-Math.min(110,w*.23))>130);unlockAudio();status('run');updateHud();canvas.focus()}
  function shuffleWorld(){if(g.phase!=='ready')return;g.startCity=(g.startCity+1+Math.floor(Math.random()*(CITIES.length-1)))%CITIES.length;updateHud()}
  engine.current={start,shuffleWorld,continueRun,jump,punch,pause,duck:value=>{g.duck=value&&g.phase==='run'},resume:()=>{if(g.phase==='paused'){unlockAudio();status('run');canvas.focus()}}}
  function resize(){const box=canvas.getBoundingClientRect();w=Math.max(240,box.width);h=box.height;canvas.width=Math.round(w);canvas.height=h}
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize()
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(!visible)pause()});io.observe(canvas)
  function key(e){
   if(!['Space','ArrowUp','KeyW','KeyX','ArrowDown','KeyS','Escape'].includes(e.code))return
   e.preventDefault();if(e.repeat)return
   if(e.code==='Escape'){pause();return}
   if(g.phase==='ready'||g.phase==='over'){start();return}
   if(e.code==='ArrowDown'||e.code==='KeyS')g.duck=true
   else if(e.code==='KeyX')punch();else jump()
  }
  function release(e){if(e.code==='ArrowDown'||e.code==='KeyS')g.duck=false}
  canvas.addEventListener('keydown',key);window.addEventListener('keyup',release);window.addEventListener('blur',pause)
  const visibility=()=>{if(document.hidden)pause()};document.addEventListener('visibilitychange',visibility)
  const scenery=new Image();const background=new Promise((resolve,reject)=>{scenery.onload=resolve;scenery.onerror=reject;scenery.src=BASE+'city-backdrops.png'})
  const bethesda=new Image();const arena=new Promise((resolve,reject)=>{bethesda.onload=()=>resolve(bethesda);bethesda.onerror=reject;bethesda.src=BASE+'bethesda.png'})
  Promise.all([loadAtlas('couple-atlas-chicago.png',true),loadAtlas('couple-atlas-wedding.png',true),loadAtlas('enemies-pixel.png'),loadAtlas('enemies-cities.png'),background,loadAtlas('ilolo-duck.png',false,true),arena,loadAtlas('props-pixel.png',false,false,true),loadTerrain()]).then(a=>{if(alive){assets=a;status('ready');updateHud()}}).catch(()=>{if(alive)status('error')})
  function sprite(atlas,row,frame,x,feet,height,flip=false){const b=atlas.frames[row][frame],scale=height/atlas.frames[row][0].h;ctx.save();ctx.translate(x,feet);ctx.scale(flip?-1:1,1);ctx.drawImage(atlas.sheet,b.x,b.y,b.w,b.h,-b.w*scale/2,-b.h*scale,b.w*scale,b.h*scale);ctx.restore()}
  function drawDuck(x,feet){
   const row=outfitRef.current==='suit'?1:0,frames=assets[5].frames[row]
   const frame=frames[Math.floor(g.time*9)%4]
   // One uniform scale for the entire animation preserves head size and footwork.
   const scale=58/Math.max(...frames.map(f=>f.h))
   ctx.drawImage(assets[5].sheet,frame.x,frame.y,frame.w,frame.h,x-frame.w*scale/2,feet-frame.h*scale,frame.w*scale,frame.h*scale)
  }
  function tick(dt){
   g.time+=dt;g.invincible=Math.max(0,g.invincible-dt);const speed=Math.min(460,220+g.distance/170),floor=h-70,px=Math.min(110,w*.23),city=CITIES[cityIndex()]
   g.distance+=speed*dt;g.cooldown=Math.max(0,g.cooldown-dt);g.punch=Math.max(0,g.punch-dt);const previousY=g.y;g.grounded=false;g.vy-=1100*dt;g.y+=g.vy*dt
   g.platformTimer-=dt
   if(g.platformTimer<=0){g.platforms.push({x:w+60,w:[90,130,190][Math.floor(Math.random()*3)],height:[45,60,70,100,130][Math.floor(Math.random()*5)],theme:cityIndex()});g.platformTimer=1.8+Math.random()*1.2}
   g.obstacleTimer-=dt
   if(g.obstacleTimer<=0){const kind=['dumpster','barrel','crate','hurdle','planter'][cityIndex()],height=kind==='hurdle'?35:kind==='dumpster'?48:40+Math.random()*12,width=kind==='dumpster'?65:kind==='hurdle'?48:42;const art=assets[8].frames[cityIndex()][2],scale=Math.min(width/art.w,height/(art.h-art.surface));g.obstacles.push({x:w+70,w:art.w*scale,height:(art.h-art.surface)*scale,kind});g.obstacleTimer=2.8+Math.random()*2}
   g.obstacles.forEach(o=>{o.x-=speed*dt});g.obstacles=g.obstacles.filter(o=>o.x+o.w>-30)
   g.platforms.forEach(p=>{p.x-=speed*dt})
   // One-way platforms: land from above and jump through from below.
   const landing=[...g.platforms,...g.obstacles].filter(p=>px+13>p.x&&px-13<p.x+p.w&&previousY>=p.height&&g.y<=p.height&&g.vy<=0).sort((a,b)=>b.height-a.height)[0]
   if(landing){g.y=landing.height;g.grounded=true;g.vy=0;g.jumps=0}
   if(g.y<=0){g.y=0;g.grounded=true;g.vy=0;g.jumps=0}
   g.platforms=g.platforms.filter(p=>p.x+p.w>-30)
   g.spawn-=dt;if(g.spawn<=0){const type=city.enemies[Math.floor(Math.random()*city.enemies.length)],bird=type[1]===1;g.enemies.push({x:w+80,y:bird?floor-90:floor-26+CONTACT_INSET,w:32,h:bird?32:26,type,bird,speedRatio:bird?.85+Math.random()*.65:.65+Math.random()*.7,animation:Math.random()*10});g.spawn=1.35+Math.random()*.8}
   g.waves.forEach(a=>{a.x+=660*dt;a.life-=dt})
   g.enemies.forEach(e=>{e.x-=speed*e.speedRatio*dt;e.animation+=dt*e.speedRatio;for(const a of g.waves)if(!e.dead&&a.life>0&&intersects(a,e)){e.dead=true;a.life=0;g.kills++;audio.effect(880,.09)}})
   const hitbox={x:px-13,y:floor-g.y+(g.grounded?CONTACT_INSET:0)-(g.duck?53:67),w:26,h:g.duck?48:62}
   if(g.time>=g.pizzaAt){g.pickups.push({x:w+40,y:floor-46,w:28,h:28});g.pizzaAt=g.time+55+Math.random()*45}
   for(const p of g.pickups){p.x-=speed*dt;if(intersects(hitbox,p)){p.collected=true;g.lives++;audio.effect(1100,.25);updateHud()}}
   g.pickups=g.pickups.filter(p=>!p.collected&&p.x>-40)
   if(g.invincible<=0&&(g.enemies.some(e=>!e.dead&&intersects(hitbox,e))||g.obstacles.some(o=>intersects(hitbox,{x:o.x+3,y:floor-o.height+CONTACT_INSET+4,w:o.w-6,h:o.height-4})))){g.best=Math.max(g.best,score());try{localStorage.setItem(BEST,String(g.best))}catch{}status('over');if(!g.lives)saveRun();updateHud()}
   g.enemies=g.enemies.filter(e=>!e.dead&&e.x>-80);g.waves=g.waves.filter(a=>a.life>0&&a.x<w+80)
   if(Math.floor(g.time*5)!==Math.floor((g.time-dt)*5))updateHud()
  }
  function terrain(row,col,x,surfaceY,width,height){
   const atlas=assets[8],b=atlas.frames[row][col];
   if(col===1){
    // Fixed pixel scale, intact end caps and a repeating center: never squash art.
    const scale=.4,cap=Math.min(b.w*.22,width/(2*scale)),leftWidth=cap*scale;
    const top=Math.round(surfaceY-b.surface*scale),drawHeight=b.h*scale;
    const draw=(sx,sw,dx,dw)=>ctx.drawImage(atlas.sheet,sx,b.y,sw,b.h,Math.round(dx),top,dw,drawHeight);
    draw(b.x,cap,x,leftWidth);
    const middle=b.w-2*cap,remaining=width-2*leftWidth;
    for(let offset=0;offset<remaining;){const piece=Math.min(middle*scale,remaining-offset);draw(b.x+cap,piece/scale,x+leftWidth+offset,piece);offset+=piece}
    draw(b.x+b.w-cap,cap,x+width-leftWidth,leftWidth);return;
   }
   const scale=height/(b.h-b.surface),top=surfaceY-b.surface*scale;
   ctx.drawImage(atlas.sheet,b.x+(col===0?b.w*.08:0),b.y,b.w*(col===0?.84:1),b.h,x,top,width,b.h*scale);
  }
  function drawObstacle(o,floor){terrain(['dumpster','barrel','crate','hurdle','planter'].indexOf(o.kind),2,o.x,floor-o.height+CONTACT_INSET,o.w,o.height)}
  function draw(){
   ctx.imageSmoothingEnabled=false;ctx.fillStyle='#152d37';ctx.fillRect(0,0,w,h);if(!assets)return
   const stage=g.distance/6500,index=cityIndex(),progress=stage%1,sw=scenery.width/2,sh=scenery.height/2
   function backdrop(city,alpha){
    // A single oversized image drifts only a few pixels; never tile or wrap it.
    const image=city.tile===null?assets[6]:scenery,sourceW=city.tile===null?image.width:sw,sourceH=city.tile===null?image.height:sh
    const bw=Math.max(w*1.08,h*sourceW/sourceH),bh=bw*sourceH/sourceW
    const drift=(Math.sin(g.time/100)+1)/2
    ctx.globalAlpha=alpha
    ctx.drawImage(image,city.tile===null?0:(city.tile%2)*sw,city.tile===null?0:Math.floor(city.tile/2)*sh,sourceW,sourceH,-(bw-w)*drift,(h-bh)/2,bw,bh)
   }
   backdrop(CITIES[index],1)
   if(progress>.9)backdrop(CITIES[(index+1)%CITIES.length],(progress-.9)/.1)
   ctx.globalAlpha=1
   const floor=h-70,ground=assets[8].frames[index][0],tileWidth=ground.w*.84*70/(ground.h-ground.surface),groundOffset=g.distance%tileWidth
   for(let x=-groundOffset;x<w;x+=tileWidth)terrain(index,0,x,floor,tileWidth+1,70)
   for(const p of g.platforms)terrain(p.theme,1,p.x,floor-p.height,p.w,18)
   for(const o of g.obstacles)drawObstacle(o,floor)
   const frame=g.punch>0?7:!g.grounded?(g.vy>0?5:6):g.phase==='run'?1+Math.floor(g.time*10)%4:0
   const playerAtlas=assets[outfitRef.current==='suit'?1:0],playerX=Math.min(110,w*.23),feet=floor-g.y+(g.grounded?CONTACT_INSET:0)
   ctx.globalAlpha=g.invincible>0?(Math.sin(g.time*22)>0?.45:1):1
   if(g.duck)drawDuck(playerX,feet)
   else sprite(playerAtlas,0,frame,playerX,feet,80)
   ctx.globalAlpha=1
   for(const p of g.pickups){const a=assets[7],b=a.frames[0][1];ctx.drawImage(a.sheet,b.x,b.y,b.w,b.h,p.x,p.y,28,28)}
   for(const e of g.enemies){const f=e.bird?2+Math.floor(e.animation*8)%2:Math.floor(e.animation*9)%4;sprite(assets[2+e.type[0]],e.type[1],f,e.x+16,e.y+e.h,e.bird?38:33,true)}
   for(const a of g.waves){ctx.save();ctx.translate(a.x,a.y+24);ctx.fillStyle='#b9eff0';ctx.beginPath();ctx.moveTo(-9,-25);ctx.quadraticCurveTo(35,0,-9,25);ctx.quadraticCurveTo(10,0,-9,-25);ctx.fill();ctx.restore()}
  }
  function loop(now){const dt=Math.min((now-last)/1000||0,.04);last=now;if(visible){audio.setScene(CITIES[cityIndex()].name,g.phase==='run');audio.tick();if(g.phase==='run'){let remaining=dt;while(remaining>0&&g.phase==='run'){const step=Math.min(remaining,1/120);tick(step);remaining-=step}}draw()}raf=requestAnimationFrame(loop)}raf=requestAnimationFrame(loop)
  return()=>{audio.stop();audio.context?.close().catch(()=>{});audioRef.current=null;alive=false;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();canvas.removeEventListener('keydown',key);window.removeEventListener('keyup',release);window.removeEventListener('blur',pause);document.removeEventListener('visibilitychange',visibility);engine.current=null}
 // Audio preferences are read once here; the controls update the live engine.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
 return <div className="city-runner" id="city-runner">
  <div className="city-runner-toolbar"><div><strong>The City that Never Sleeps</strong><span>{hud.city} · {hud.score} points · Best {hud.best} · Bonus lives {hud.lives}</span></div>
   <button ref={cogRef} type="button" className="city-runner-cog" aria-label="Game settings" aria-expanded={settings} aria-controls="runner-settings" onClick={()=>{engine.current?.pause();setSettings(!settings)}}><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.5 3h5l.6 2.6 2.2 1.3 2.6-.8 2.5 4.3-2 1.8v2.6l2 1.8-2.5 4.3-2.6-.8-2.2 1.3-.6 2.6h-5l-.6-2.6-2.2-1.3-2.6.8-2.5-4.3 2-1.8v-2.6l-2-1.8L4.1 6l2.6.8 2.2-1.3Z" transform="translate(1.1 -1) scale(.91)"/><circle cx="12" cy="12" r="3"/></svg></button>
  </div>
  <div className="city-runner-stage"><canvas ref={canvasRef} tabIndex={0} aria-label="The City that Never Sleeps. Space or up arrow to double jump. Down arrow to duck. X for a ranged punch. Escape to pause." onPointerDown={e=>{e.preventDefault();canvasRef.current.focus();engine.current?.jump()}}/>

   {settings&&<div className="city-runner-settings-backdrop" onClick={e=>{if(e.target===e.currentTarget)closeSettings()}}><div ref={settingsRef} tabIndex={-1} className="city-runner-settings" id="runner-settings" role="dialog" aria-label="Game settings" onKeyDown={e=>{if(e.key==='Escape'){e.stopPropagation();closeSettings()}}}><div className="city-runner-settings-heading"><h3>Game settings</h3><button type="button" aria-label="Close settings" onClick={closeSettings}>×</button></div><label htmlFor="runner-outfit">Outfit</label><select id="runner-outfit" value={outfit} onChange={e=>{setOutfit(e.target.value);outfitRef.current=e.target.value}}><option value="jacket">Streetwear</option><option value="suit">Special Agent Izu</option></select><fieldset className="runner-audio"><legend>Audio</legend>{['music','ambience','effects'].map(channel=><label key={channel}><span>{channel[0].toUpperCase()+channel.slice(1)}</span><input type="checkbox" checked={audioSettings[channel]} onChange={()=>changeAudio(channel)}/></label>)}</fieldset><p>↑ / Space: double jump<br/>↓ / S: hold to duck<br/>X: ranged punch</p><button type="button" onClick={closeSettings}>Done</button></div></div>}
   {!settings&&phase!=='run'&&<div className={'city-runner-overlay'+(phase==='over'?' runner-game-over':'')}>{phase==='ready'?<div className="runner-character-select" role="group" aria-label="Choose your outfit">{[{id:'jacket',label:'Streetwear'},{id:'suit',label:'Special Agent Izu'}].map(character=><button key={character.id} type="button" className={'runner-character '+(outfit===character.id?'is-selected':'')} aria-pressed={outfit===character.id} onClick={()=>{setOutfit(character.id);outfitRef.current=character.id}}><span className={'runner-character-portrait '+character.id} style={{backgroundImage:`url(${BASE}ilolo-portraits.png)`}} role="img" aria-label={'Ilolo facing forward in a '+character.label.toLowerCase()}/><span className="runner-character-label">{character.label}</span></button>)}</div>:<h3>{phase==='loading'?'Loading the city…':phase==='error'?'Artwork could not load':phase==='over'?'One more run?':phase==='paused'?'Taking a breather':'The City that Never Sleeps'}</h3>}{phase==='over'&&<div className="runner-results"><div className="runner-run-stats"><span>{hud.distance} distance</span><span>{hud.kills} enemies defeated</span></div>{hud.lives>0?<button onClick={()=>engine.current?.continueRun()}>Use Bonus Life ({hud.lives})</button>:null}<h4>Best runs on this device</h4><ol>{scores.map((run,i)=><li key={i}><span>{run.city}</span><strong>{run.score}</strong></li>)}</ol>{!scores.length&&<small>Finish this run to record your score.</small>}</div>}<p>{phase==='over'?`${hud.score} points · ${hud.best} personal best`:'Jump over obstacles or land on top. Duck under birds, and punch through five worlds.'}</p>{!['loading','error'].includes(phase)&&<div className="runner-start-actions"><button className="runner-start-tile" onClick={()=>phase==='paused'?engine.current?.resume():engine.current?.start()}><svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 3v14l12-7Z"/></svg><span>{phase==='paused'?'Resume':phase==='over'?'Try again':'Start'}</span></button>{phase==='ready'&&<button className="runner-shuffle-tile" aria-label="Randomize starting world" title="Randomize starting world" onClick={()=>engine.current?.shuffleWorld()}><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 6M4 12l2 6a7 7 0 0 0 12-1"/></svg></button>}</div>}</div>}
  </div>
  <div className="city-runner-controls"><button onPointerDown={e=>{e.preventDefault();engine.current?.jump()}} onClick={e=>{if(e.detail===0)engine.current?.jump()}}>Jump ↑</button><button onPointerDown={e=>{e.preventDefault();engine.current?.punch()}} onClick={e=>{if(e.detail===0)engine.current?.punch()}}>Punch X</button><button onPointerDown={e=>{e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);engine.current?.duck(true)}} onPointerUp={()=>engine.current?.duck(false)} onPointerCancel={()=>engine.current?.duck(false)} onLostPointerCapture={()=>engine.current?.duck(false)} onKeyDown={e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();engine.current?.duck(true)}}} onKeyUp={()=>engine.current?.duck(false)} onBlur={()=>engine.current?.duck(false)}>Duck ↓</button><button disabled={phase!=='run'} onClick={()=>engine.current?.pause()}>Pause</button><span>↑ jump · ↓ hold to duck · X punch</span></div>
 </div>
}
