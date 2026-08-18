import React, { useEffect, useRef } from 'react'

// An interactive doodle: a two-color squiggle draws itself when scrolled
// into view, and visitors can add their own strokes with the mouse.
export default function EdDoodle() {
  const canvasRef = useRef(null)
  const strokeIndexRef = useRef(0)
  const drawingRef = useRef(false)
  const lastPointRef = useRef(null)

  const palette = () => {
    const styles = getComputedStyle(canvasRef.current)
    return [styles.getPropertyValue('--ed-accent').trim() || '#c22a41', '#d9a922']
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    // deterministic looping scribble — layered sine curves fill the canvas
    // with overlapping loops, like a hand-drawn tangle
    const makeSquiggle = (f1, f2, f3, f4, p, steps) => {
      const pts = []
      const TAU = Math.PI * 2
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const x = w * 0.5 + w * 0.3 * Math.sin(f1 * TAU * t + p) + w * 0.16 * Math.sin(f2 * TAU * t + p * 2)
        const y = h * 0.48 + h * 0.3 * Math.cos(f3 * TAU * t + p) + h * 0.14 * Math.sin(f4 * TAU * t)
        pts.push([x, y])
      }
      return pts
    }

    const colors = palette()
    const strokes = [
      { pts: makeSquiggle(1.9, 4.1, 1.4, 3.3, 0.4, 150), color: colors[1] },
      { pts: makeSquiggle(1.3, 3.7, 1.8, 2.6, 2.1, 110), color: colors[0] },
    ]

    // progressive reveal once the canvas scrolls into view — draws only the
    // NEW segments each frame (no clearing), so visitor scribbles are never
    // wiped while the animation is still running
    let raf
    let drawn = 0
    const total = strokes.reduce((s, st) => s + st.pts.length, 0)
    const drawFrame = () => {
      const target = Math.min(drawn + 4, total)
      let offset = 0
      for (const st of strokes) {
        const startIdx = Math.max(drawn - offset, 1)
        const endIdx = Math.min(target - offset, st.pts.length)
        if (endIdx > startIdx) {
          ctx.strokeStyle = st.color
          ctx.beginPath()
          ctx.moveTo(st.pts[startIdx - 1][0], st.pts[startIdx - 1][1])
          for (let i = startIdx; i < endIdx; i++) {
            ctx.lineTo(st.pts[i][0], st.pts[i][1])
          }
          ctx.stroke()
        }
        offset += st.pts.length
      }
      drawn = target
      if (drawn < total) raf = requestAnimationFrame(drawFrame)
    }

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        raf = requestAnimationFrame(drawFrame)
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(canvas)

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // visitor scribbles — mouse only, so touch scrolling is never trapped
  const pos = (e) => {
    const r = canvasRef.current.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    drawingRef.current = true
    lastPointRef.current = pos(e)
    strokeIndexRef.current += 1
  }

  const onPointerMove = (e) => {
    if (!drawingRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const [x, y] = pos(e)
    const [lx, ly] = lastPointRef.current
    ctx.strokeStyle = palette()[strokeIndexRef.current % 2]
    ctx.beginPath()
    ctx.moveTo(lx, ly)
    ctx.lineTo(x, y)
    ctx.stroke()
    lastPointRef.current = [x, y]
  }

  const stop = () => { drawingRef.current = false }

  return (
    <canvas
      ref={canvasRef}
      className="ed-doodle-canvas"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerLeave={stop}
      aria-label="Interactive doodle — draw on it with your mouse"
    />
  )
}
