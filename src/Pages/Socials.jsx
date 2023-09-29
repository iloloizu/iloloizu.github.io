import React from 'react'
import avatar from '../images/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendar, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faMedium, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
    <div className="HomePage"> 
        <div className="Socials">
           <div className="link-image">
            <img src={avatar} alt="Ilolo Izu"/>
           </div>
          <h1 className='link-header'>
            Ilolo Izu
          </h1>
          <div className='linktree'>
            <a href='mailto: iloloizu97@gmail.com' target='_blank' className='linktree-icon' rel="noreferrer">Email
            <FontAwesomeIcon icon={faEnvelope} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://youtube.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">YouTube
              <FontAwesomeIcon icon={faYoutube} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://twitter.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">Twitter
              <FontAwesomeIcon icon={faTwitter} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://instagram.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">Instagram
              <FontAwesomeIcon icon={faInstagram} className="homepage-icon" target="_blank"/>
            </a>
          </div>
        </div>
    </div>

  )
}

export default Socials