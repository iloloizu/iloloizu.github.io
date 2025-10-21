import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function LinkTree() {
  return (
    <div className="linktree-page nova-bg"> 
      <div className="linktree-container">
        <h1 className='linktree-header'>Ilolo Izu</h1>
        <p className='linktree-tagline'>Let's connect.</p>
        
        <div className='linktree-links'>
          <Link to='/portfolio' className='linktree-btn'>
            <FontAwesomeIcon icon={faCamera} className="linktree-icon"/>
            <span>Portfolio</span>
          </Link>

          <a href='https://instagram.com/iloloizu' className='linktree-btn' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="linktree-icon"/>
            <span>Instagram</span>
          </a>
          
          <a href='mailto:iloloizu97@gmail.com' className='linktree-btn' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="linktree-icon"/>
            <span>Email</span>
          </a>
          
          <a href='https://youtube.com/iloloizu' className='linktree-btn' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="linktree-icon"/>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LinkTree
