import React from 'react'
import avatar from '../images/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendar, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faMedium, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function LinkTree() {
  return (
    <div className="HomePage"> 
        <div className="LinkTree">
           <div className="link-image">
            <img src={avatar} alt="Ilolo Izu"/>
           </div>
          <h1 className='link-header'>
            Ilolo Izu
          </h1>
          <div className='link-icons'>
             <a href='mailto: iloloizu97@gmail.com' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="link-icon" target="_blank"/>
             </a>

            <a href='https://calendly.com/ilolo' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCalendar} className="link-icon" target="_blank"/>
            </a>

            <a href='https://www.linkedin.com/in/ilolo-izu/' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="link-icon" target="_blank"/>
            </a>

            <a href='https://iloloizu.com/' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLaptop} className="link-icon" target="_blank"/>
            </a>
          </div>
          <div className='linktree'>
            <a href='https://calendly.com/ilolo' className='linktree-icon' target="_blank" rel="noreferrer">Let's Connect 
              <FontAwesomeIcon icon={faCalendar} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://iloloizu.com/' className='linktree-icon' target="_blank" rel="noreferrer">Software Developer Portfolio
              <FontAwesomeIcon icon={faLaptop} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://www.linkedin.com/in/ilolo-izu/' className='linktree-icon' target="_blank" rel="noreferrer">LinkedIn 
              <FontAwesomeIcon icon={faLinkedin} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://ilolo.medium.com/' className='linktree-icon' target="_blank" rel="noreferrer">Medium Blog
              <FontAwesomeIcon icon={faMedium} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://github.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">Github
              <FontAwesomeIcon icon={faGithub} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://twitter.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">Twitter
              <FontAwesomeIcon icon={faTwitter} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://instagram.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">Instagram
              <FontAwesomeIcon icon={faInstagram} className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://youtube.com/iloloizu' className='linktree-icon' target="_blank" rel="noreferrer">YouTube
              <FontAwesomeIcon icon={faYoutube} className="homepage-icon" target="_blank"/>
            </a>

          </div>
        </div>
    </div>

  )
}

export default LinkTree