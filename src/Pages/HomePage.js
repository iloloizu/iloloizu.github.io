import React from 'react';
import '../styles/typ.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {
  return (
    <div className="HomePage"> 
        <div className="hero"> 
          <h1 className='hero-text'>
            Hi, I'm <span>Ilolo Izu</span>, Software Engineer
          </h1>
          <p className='h-sub-text'>
          Welcome to my website, here you can join the journey and follow me on my path to success in the field of web development.
          My name is Ilolo Izu (e-lo-lo e-zu), known some places by my first name—Justin! I'm a Texas A&M University & Flatiron 
          School Alumnus. I'm a developer with a passion for building beautiful user interfaces and an insatiable hunger for personal growth.
          I currently work as a Software Engineer at 
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7031000808267669505/' target="_blank" rel="noreferrer"> Resilia</a>.
          </p>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/ilolo-izu/' className='icon' target="_blank" rel="noreferrer">LinkedIn 
              <FontAwesomeIcon icon={faLinkedin} className="homepage-icon"/>
            </a>
            <a href='https://twitter.com/iloloizu' className='icon' target="_blank" rel="noreferrer">Twitter
              <FontAwesomeIcon icon={faTwitter} className="homepage-icon"/>
            </a>
            <a href='https://ilolo.medium.com/' className='icon' target="_blank" rel="noreferrer">Blog
              <FontAwesomeIcon icon={faMedium}  className="homepage-icon" target="_blank"/>
            </a>
            <a href='https://github.com/iloloizu' className='icon' target="_blank" rel="noreferrer">Github
              <FontAwesomeIcon icon={faGithub} className="homepage-icon" target="_blank"/>
            </a>
          </div>
        </div>
    </div>
  )
}
