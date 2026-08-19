import React from 'react'
import { Link } from 'react-router-dom'
import EditorialLayout from '../layout/EditorialLayout'
import EdBack from '../components/EdBack'

// 24x24 viewbox, 1.5px stroke, currentColor — same outline icon language
// as EditorialLayout's header icons
const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5l5 2.5-5 2.5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10.5V17M7 7.2v.1M11 17v-3.8c0-1.2.9-2.2 2.2-2.2 1.3 0 2.3 1 2.3 2.2V17" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-3.1c0-.9-.1-1.5-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.5 4.2 5.4 4.5 5.4 4.5a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.9c0 4.6 2.7 5.7 5.5 6-.4.5-.5 1.1-.5 2V22" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  ),
}

const socials = [
  { icon: 'instagram', title: 'Instagram', sub: '@iloloizu', href: 'https://instagram.com/iloloizu' },
  { icon: 'youtube', title: 'YouTube', sub: '@iloloizu', href: 'https://youtube.com/iloloizu' },
  { icon: 'linkedin', title: 'LinkedIn', sub: 'in/ilolo-izu', href: 'https://www.linkedin.com/in/ilolo-izu/' },
  { icon: 'github', title: 'GitHub', sub: '@iloloizu', href: 'https://github.com/iloloizu' },
  { icon: 'mail', title: 'Email', sub: 'iloloizu97@gmail.com', href: 'mailto:iloloizu97@gmail.com' },
]

function LinkTree() {
  return (
    <EditorialLayout>
      <EdBack />
      <h2 className="ed-label">Socials</h2>
      <h1 className="ed-page-title">Let&rsquo;s connect</h1>
      <p className="ed-page-intro">
        Wherever you found me, whether the track, the terminal, or the timeline,
        here&rsquo;s where everything else lives.
      </p>

      <div className="ed-rows">
        {socials.map((s) => (
          <a key={s.title} className="ed-row" href={s.href} target="_blank" rel="noreferrer">
            <div className="ed-tile ed-tile--icon" aria-hidden="true">{icons[s.icon]}</div>
            <div className="ed-row-body">
              <div className="ed-row-title">{s.title}</div>
              <div className="ed-row-sub">{s.sub}</div>
            </div>
            <div className="ed-row-date">↗</div>
          </a>
        ))}
        <Link className="ed-row" to="/portfolio">
          <div className="ed-tile ed-tile--icon" aria-hidden="true">{icons.camera}</div>
          <div className="ed-row-body">
            <div className="ed-row-title">Photography</div>
            <div className="ed-row-sub">Portfolio</div>
          </div>
          <div className="ed-row-date">→</div>
        </Link>
      </div>
    </EditorialLayout>
  )
}

export default LinkTree
