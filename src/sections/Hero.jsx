import React from 'react'

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <p className="eyebrow">Hi, my name is</p>
      <h1 className="headline">Ilolo Izu.</h1>
      <h2 className="subhead">I build performant, accessible web experiences.</h2>
      <p className="lede">I’m a developer focused on crafting usable, inclusive interfaces and building products end‑to‑end. Currently open to opportunities and collaborations.</p>
      <div className="cta-row">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="#contact" className="btn">Get in touch</a>
      </div>
    </section>
  )
}


