import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <a href="#top" className="brand">Ilolo Izu</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <aside className="left-rail" aria-label="Social links">
        <ul>
          <li><a href="mailto:iloloizu97@gmail.com" aria-label="Email">Email</a></li>
          <li><a href="https://instagram.com/iloloizu" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://youtube.com/iloloizu" target="_blank" rel="noreferrer">YouTube</a></li>
          <li><a href="https://github.com/iloloizu" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/iloloizu/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </aside>

      <aside className="right-rail" aria-hidden="true">
        <a href="mailto:iloloizu97@gmail.com">iloloizu97@gmail.com</a>
      </aside>

      <main id="top" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <p>Built with React and Sass.</p>
      </footer>
    </div>
  )
}


