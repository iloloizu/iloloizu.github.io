import React, { useState, useEffect, useRef } from 'react'

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const cursorGlowRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isDarkMode || !cursorGlowRef.current) return

    const handleMouseMove = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorGlowRef.current) {
          cursorGlowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isDarkMode])

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'blogs', 'contact']
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`layout two-col ${isDarkMode ? 'dark-mode' : 'nova-bg'}`}>
      {isDarkMode && (
        <div 
          ref={cursorGlowRef}
          className="cursor-glow"
        />
      )}
      
      <aside className="sticky-left" aria-label="Intro and navigation">
        <div className="identity">
          <h1 className="name">Ilolo Izu</h1>
          <p className="role">Full-Stack Software Developer</p>
          <p className="tagline">Athlete’s discipline, engineer’s precision.</p>
        </div>
        <nav className="side-nav" aria-label="Section navigation">
          <ul>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#blogs" onClick={(e) => handleNavClick(e, 'blogs')} className={activeSection === 'blogs' ? 'active' : ''}>Blogs</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
        <div className="theme-toggle-container">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
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
          <p>Built with <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a>. Deployed on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>, build by Ilolo Izu, with inspiration from <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a>.</p>
          <div className="socials-mobile">
            <a href="https://github.com/iloloizu" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/iloloizu/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/iloloizu" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://youtube.com/iloloizu" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </footer>
      </main>
    </div>
  )
}


