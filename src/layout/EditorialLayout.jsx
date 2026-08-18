import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/transparent-ilolo-logo.png'
import EditorialContact from '../components/EditorialContact'

// 24x24 viewbox, 1.5px stroke, currentColor — Lucide-style outline icons
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

// remembers the previous page's column width across route changes so the
// next page knows whether to animate its width (module scope survives
// remounts within the SPA session)
let lastWide = false

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Photography', to: '/portfolio' },
]

export default function EditorialLayout({ children, wide = false }) {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('ed-theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  // animate the content column when its width differs from the previous page
  const [widthAnim] = useState(() => (lastWide === wide ? '' : wide ? 'ed-anim-expand' : 'ed-anim-contract'))

  useEffect(() => {
    lastWide = wide
  }, [wide])

  useEffect(() => {
    localStorage.setItem('ed-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // nova.scss paints html/body/.App with its own light background, which
  // peeks out at the page edges (overscroll, scrollbar gutter). While an
  // editorial page is mounted, repaint the whole document to match.
  useEffect(() => {
    const bg = isDark ? 'hsl(0, 0%, 7%)' : 'hsl(0, 0%, 98%)'
    const targets = [document.documentElement, document.body, document.querySelector('.App')].filter(Boolean)
    const previous = targets.map((el) => el.style.background)
    targets.forEach((el) => { el.style.background = bg })
    return () => targets.forEach((el, i) => { el.style.background = previous[i] })
  }, [isDark])

  return (
    <div className={`editorial ${isDark ? 'ed-dark' : ''}`}>
      <div className="ed-column">
        <header className="ed-header">
          <Link to="/" className="ed-identity">
            <img src={logo} alt="Ilolo Izu logo" />
            <span>Ilolo Izu</span>
          </Link>

          <nav className="ed-nav" aria-label="Site navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </nav>

          <div className="ed-header-actions">
            <button
              className="ed-icon-button"
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="ed-icon-button ed-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {menuOpen && (
            <nav className="ed-mobile-menu" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              ))}
            </nav>
          )}
        </header>
      </div>

      <main className={`ed-column ed-column--main ${wide ? 'ed-column--wide' : ''} ${widthAnim}`}>
        {children}
      </main>

      <div className="ed-column ed-column--foot">
        <footer className="ed-footer">
          <div className="ed-footer-links">
            <button className="ed-footer-contact" onClick={() => setContactOpen(true)}>Contact</button>
            <a href="https://www.linkedin.com/in/ilolo-izu/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/iloloizu" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://ilolo.medium.com/" target="_blank" rel="noreferrer">Medium</a>
            <a href={`${process.env.PUBLIC_URL}/Ilolo_Izu_Resume_2026.pdf`} target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <span className="ed-footer-note">© {new Date().getFullYear()} Ilolo Izu</span>
        </footer>
      </div>

      {contactOpen && <EditorialContact onClose={() => setContactOpen(false)} />}
    </div>
  )
}
