import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="layout two-col nova-bg">
      <aside className="sticky-left" aria-label="Intro and navigation">
        <div className="identity">
          <h1 className="name">Ilolo Izu</h1>
          <p className="role">Full-Stack Software Developer</p>
          <p className="tagline">I build accessible, pixel‑perfect digital experiences for the web.</p>
        </div>
        <nav className="side-nav" aria-label="Section navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="socials">
          <a href="https://github.com/iloloizu" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/iloloizu/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/iloloizu" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com/iloloizu" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </aside>

      <main id="top" className="scroll-right">
        {children}
        <footer className="site-footer">
          <p>Built with React and Sass.</p>
        </footer>
      </main>
    </div>
  )
}


