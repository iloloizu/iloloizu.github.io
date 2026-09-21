// Original, locally synthesized score: no streaming, accounts, or audio downloads.
export const themes = {
 'College Station': { bpm:104, root:60, tune:[0,4,7,9,7,4,2,4,0,4,7,12,9,7,4,2], air:900, chirp:1800 },
 Philadelphia: { bpm:112, root:62, tune:[0,3,7,10,7,5,3,2,0,7,10,12,10,7,5,3], air:380, chirp:1200 },
 Denver: { bpm:88, root:65, tune:[0,7,12,9,7,4,2,7,0,4,9,12,14,12,9,7], air:650, chirp:2400 },
 'New York City': { bpm:120, root:57, tune:[0,3,7,10,12,10,7,5,3,7,10,14,12,7,5,3], air:180, chirp:850 },
 'Bethesda Terrace': { bpm:138, root:60, tune:[0,7,12,7,3,10,15,10,5,12,17,12,7,14,19,14], air:1700, chirp:2100 },
};
export class GameAudio {
 constructor(createContext=()=>new (window.AudioContext||window.webkitAudioContext)()) {
  this.createContext=createContext;this.enabled={music:false,ambience:false,effects:false};this.sources=new Set();this.scene='College Station';this.active=false;this.step=0;this.next=0;
 }
 async toggle(channel) {
  const on=!this.enabled[channel];this.enabled[channel]=on;
  try {
   if(on){this.context ||= this.createContext();await this.context.resume();}
   this.stop(channel);this.next=this.context?.currentTime||0;
  } catch {this.enabled[channel]=false;}
  return this.enabled[channel];
 }
 setScene(scene,active) {
  if(scene!==this.scene||active!==this.active){this.stop();this.step=0;this.next=this.context?.currentTime||0;}
  this.scene=scene;this.active=active;
  if(active&&this.context?.state==='suspended')this.context.resume().catch(()=>{});
 }
 stop(channel) {
  for(const item of [...this.sources])if(!channel||item.channel===channel){try{item.source.stop();}catch{/* Already ended. */}item.cleanup();}
 }
 track(source,nodes,channel) {
  const item={source,channel,cleanup:()=>{source.disconnect();nodes.forEach(n=>n.disconnect());this.sources.delete(item);}};
  this.sources.add(item);source.onended=item.cleanup;return source;
 }
 tone(freq,at,duration,volume,type,channel,end=freq) {
  const c=this.context,o=c.createOscillator(),g=c.createGain();o.type=type;
  o.frequency.setValueAtTime(freq,at);o.frequency.exponentialRampToValueAtTime(end,at+duration);
  g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(volume,at+.012);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
  o.connect(g);g.connect(c.destination);this.track(o,[g],channel);o.start(at);o.stop(at+duration+.01);
 }
 noise(at,duration,volume,frequency,channel) {
  const c=this.context;
  if(!this.noiseBuffer){this.noiseBuffer=c.createBuffer(1,c.sampleRate*2,c.sampleRate);const data=this.noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;}
  const source=c.createBufferSource(),filter=c.createBiquadFilter(),g=c.createGain();source.buffer=this.noiseBuffer;source.loop=true;filter.type='lowpass';filter.frequency.value=frequency;
  g.gain.setValueAtTime(.0001,at);g.gain.linearRampToValueAtTime(volume,at+Math.min(.15,duration/3));g.gain.linearRampToValueAtTime(.0001,at+duration);
  source.connect(filter);filter.connect(g);g.connect(c.destination);this.track(source,[filter,g],channel);source.start(at);source.stop(at+duration+.01);
 }
 effect(freq=660,duration=.09) {
  if(this.enabled.effects&&this.active&&this.context?.state==='running')this.tone(freq,this.context.currentTime,duration,.035,'sine','effects',freq*.65);
 }
 tick() {
  const c=this.context;if(!this.active||!c||c.state!=='running'||(!this.enabled.music&&!this.enabled.ambience))return;
  const t=themes[this.scene]||themes['College Station'],beat=60/t.bpm/2;
  if(this.next<c.currentTime)this.next=c.currentTime;
  // A short audio-clock lookahead avoids timer drift and long background queues.
  while(this.next<c.currentTime+.12){
   const at=this.next,s=this.step,bar=Math.floor(s/16)%4,root=t.root+[0,5,9,7][bar];
   const hz=n=>440*2**((n-69)/12);
   if(this.enabled.music){
    if(s%8!==7)this.tone(hz(root+t.tune[s%16]),at,beat*.82,.022,'triangle','music');
    if(s%2===0)this.tone(hz(root-24+(s%4===2?7:0)),at,beat*1.5,.033,'triangle','music');
    if(s%4===0){this.tone(hz(root+7),at,beat*2.8,.008,'sine','music');this.noise(at,.055,.025,900,'music');}
    if(this.scene==='Bethesda Terrace'&&s%2===1)this.noise(at,.035,.018,4500,'music');
   }
   if(this.enabled.ambience){
    if(s%8===0)this.noise(at,beat*8,.045,t.air,'ambience');
    if(s%16===10){this.tone(t.chirp,at,.16,.008,'sine','ambience',t.chirp*1.25);this.tone(t.chirp*1.15,at+.2,.12,.006,'sine','ambience',t.chirp*.9);}
   }
   this.step++;this.next+=beat;
  }
 }
}
