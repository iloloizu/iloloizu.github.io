import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

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
          <div className="socials-mobile">
            <a href="https://www.linkedin.com/in/iloloizu/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/iloloizu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://ilolo.medium.com/" target="_blank" rel="noreferrer" aria-label="Medium">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          <a 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </a>
          </div>
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
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/iloloizu/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/iloloizu" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://ilolo.medium.com/" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </aside>

      <main id="top" className="scroll-right">
        {children}
        <footer className="site-footer">
          <p>Built with <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a> and <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a>. Deployed on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>, build by Ilolo Izu, with inspiration from <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a>.</p>
        </footer>
      </main>
    </div>
  )
}


