import React, { useEffect, useRef } from 'react'

// Hurdle runner mini-game for the "I love the reps" interlude.
// Idle: a stick runner jogs in place. Tap/click to run; tap, click, or
// space to clear hurdles. Every hurdle cleared is a rep. One-button
// controls so it plays the same on mobile and desktop, and because input
// is taps only, page scrolling is never trapped.

const GOLD = '#d9a922'
const HURDLE_H = 30
const RUN_X = 62
const BEST_KEY = 'ed-hurdles-best'

export default function EdHurdles() {
  const canvasRef = useRef(null)
  const gameRef = useRef({
    phase: 'idle', // idle | run | over
    t: 0, // gait clock
    y: 0, // runner height above ground
    vy: 0,
    hurdles: [],
    nextGap: 0,
    reps: 0,
    best: Number(localStorage.getItem(BEST_KEY)) || 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const groundY = h - 56
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const g = gameRef.current

    const colors = () => {
      const s = getComputedStyle(canvas)
      return {
        accent: s.getPropertyValue('--ed-accent').trim() || '#c22a41',
        muted: s.getPropertyValue('--ed-muted').trim() || '#757575',
        faint: s.getPropertyValue('--ed-faint').trim() || '#9e9e9e',
        line: s.getPropertyValue('--ed-line').trim() || '#e3e3e3',
      }
    }

    const polyline = (pts) => {
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.stroke()
    }

    // two-segment limb: angle a from vertical at the joint, shin/forearm
    // trails by `bend`
    const limb = (x, y, len, a, bend) => {
      const kx = x + len * Math.sin(a)
      const ky = y + len * Math.cos(a)
      polyline([[x, y], [kx, ky], [kx + len * Math.sin(a - bend), ky + len * Math.cos(a - bend)]])
    }

    const drawRunner = (accent) => {
      const footY = groundY - g.y
      const airborne = g.y > 1
      const over = g.phase === 'over'
      const hipX = RUN_X
      const hipY = footY - 30
      const shX = hipX + (over ? -2 : 4)
      const shY = hipY - 18
      ctx.strokeStyle = accent
      ctx.lineWidth = 3
      polyline([[hipX, hipY], [shX, shY]])
      ctx.beginPath()
      ctx.arc(shX + (over ? -2 : 3), shY - 9, 6, 0, Math.PI * 2)
      ctx.stroke()

      if (airborne) {
        // hurdler form — lead leg extended, trail leg tucked
        limb(hipX, hipY, 14, 1.15, 0.2)
        limb(hipX, hipY, 14, -0.45, 1.9)
        limb(shX, shY, 11, 1.6, -0.4)
        limb(shX, shY, 11, -0.9, -0.9)
      } else if (over) {
        // stumble — legs splayed, arms thrown up
        limb(hipX, hipY, 14, 0.7, 0.1)
        limb(hipX, hipY, 14, -0.7, 0.15)
        limb(shX, shY, 11, 2.6, 0.5)
        limb(shX, shY, 11, -2.4, -0.5)
      } else {
        // legs scissor half a cycle apart: straighter swinging forward, heel
        // kicked up behind; arms pump opposite their same-side leg, elbows flexed
        const p = g.t
        const leg = (ph) => limb(hipX, hipY, 14, 0.9 * Math.sin(ph), Math.max(0.1, 0.7 - 0.5 * Math.sin(ph)))
        const arm = (ph) => limb(shX, shY, 11, -0.7 * Math.sin(ph), -0.9)
        leg(p)
        leg(p + Math.PI)
        arm(p)
        arm(p + Math.PI)
      }
    }

    const drawHurdle = (x, tipped) => {
      ctx.strokeStyle = GOLD
      ctx.lineWidth = 3
      ctx.save()
      ctx.translate(x, groundY)
      if (tipped) ctx.rotate(-1.1)
      polyline([[-8, 0], [-8, -HURDLE_H]])
      polyline([[8, 0], [8, -HURDLE_H]])
      polyline([[-11, -HURDLE_H], [11, -HURDLE_H]])
      ctx.restore()
    }

    const label = (text, x, y, color, align = 'center', size = 11) => {
      ctx.fillStyle = color
      ctx.font = `${size}px 'Space Mono', 'Menlo', monospace`
      ctx.letterSpacing = '2px'
      ctx.textAlign = align
      ctx.fillText(text, x, y)
    }

    let raf
    let last = 0
    let groundOffset = 0

    const step = (now) => {
      const dt = Math.min(2, Math.max(0.25, (now - last) / 16.7))
      last = now
      const c = colors()
      const speed = 3.1 + Math.min(0.07 * g.reps, 2.4)

      if (g.phase === 'run') {
        g.t += 0.075 * speed * dt
        groundOffset = (groundOffset + speed * dt) % 40
        if (g.y > 0 || g.vy > 0) {
          g.y += g.vy * dt
          g.vy -= 0.55 * dt
          if (g.y <= 0) { g.y = 0; g.vy = 0 }
        }
        for (const hd of g.hurdles) {
          hd.x -= speed * dt
          if (!hd.scored && hd.x + 11 < RUN_X) {
            hd.scored = true
            g.reps += 1
          }
          if (Math.abs(hd.x - RUN_X) < 11 && g.y < HURDLE_H - 2) {
            hd.tipped = true
            g.phase = 'over'
            if (g.reps > g.best) {
              g.best = g.reps
              localStorage.setItem(BEST_KEY, String(g.best))
            }
          }
        }
        g.hurdles = g.hurdles.filter((hd) => hd.x > -30)
        const lastH = g.hurdles[g.hurdles.length - 1]
        if (!lastH || lastH.x < w - g.nextGap) {
          g.hurdles.push({ x: w + 30, scored: false, tipped: false })
          g.nextGap = 220 + Math.random() * 170
        }
      } else if (g.phase === 'idle' && !reducedMotion) {
        g.t += 0.09 * dt // easy warm-up jog
      }

      // ---- draw ----
      ctx.clearRect(0, 0, w, h)

      ctx.strokeStyle = c.line
      ctx.lineWidth = 2
      polyline([[0, groundY], [w, groundY]])
      for (let x = -groundOffset; x < w; x += 40) {
        polyline([[x + 20, groundY + 6], [x + 28, groundY + 6]])
      }

      for (const hd of g.hurdles) drawHurdle(hd.x, hd.tipped)
      drawRunner(c.accent)

      if (g.phase === 'idle') {
        label(coarse ? 'TAP TO RUN' : 'CLICK TO RUN', w / 2, 40, c.muted)
        if (g.best > 0) label(`BEST ${g.best}`, w / 2, 60, c.faint)
      } else if (g.phase === 'run') {
        label(`REPS ${g.reps}`, w - 10, 28, c.muted, 'right')
      } else {
        label(`${g.reps} ${g.reps === 1 ? 'REP' : 'REPS'}`, w / 2, 40, c.accent, 'center', 14)
        label(`BEST ${g.best}`, w / 2, 60, c.faint)
        label(coarse ? 'TAP TO RUN IT BACK' : 'CLICK TO RUN IT BACK', w / 2, h - 24, c.muted)
      }

      raf = requestAnimationFrame(step)
    }

    // only burn frames while the canvas is actually on screen; entries can
    // arrive batched, so only the newest one reflects the current state
    const io = new IntersectionObserver((entries) => {
      const visible = entries[entries.length - 1].isIntersecting
      if (visible && !raf) {
        last = performance.now()
        raf = requestAnimationFrame(step)
      } else if (!visible && raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }, { threshold: 0.2 })
    io.observe(canvas)

    const start = () => {
      g.phase = 'run'
      g.reps = 0
      g.t = 0
      g.y = 0
      g.vy = 0
      g.hurdles = [{ x: w + 60, scored: false, tipped: false }]
      g.nextGap = 260
    }

    const jump = () => {
      if (g.y === 0) g.vy = 8.6
    }

    const onPointerDown = (e) => {
      e.preventDefault()
      if (g.phase === 'run') jump()
      else start()
    }
    canvas.addEventListener('pointerdown', onPointerDown)

    // space/up only acts once the visitor has opted in by starting a run,
    // so the page's normal space-to-scroll is never hijacked cold
    const onKeyDown = (e) => {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return
      if (g.phase === 'run') {
        e.preventDefault()
        jump()
      } else if (g.phase === 'over') {
        e.preventDefault()
        start()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      canvas.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="ed-hurdles-canvas"
      role="img"
      aria-label="Hurdle runner mini-game. Tap or click to run, then tap or press space to jump the hurdles"
    />
  )
}
