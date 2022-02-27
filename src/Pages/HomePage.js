import React from 'react'
import '../styles/typ.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/pro-solid-svg-icons';

// import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="HomePage"> 
        <div className="hero"> 
          <h1 className='hero-text'>
            Hi, I'm <span>Ilolo Izu</span>, Software Engineer
          </h1>
          <p className='h-sub-text'>
          Welcome to my website, here you can join the journey and follow me in my path to success in the field of
            web development. My name is Ilolo Izu (e-lo-lo e-zu), known some places by my first name—Justin! I graduated from Texas A&M University in December 2019. 
            I am transitioning from years of experience in the Medical Field. I'm currently enrolled in the Software Engineering program at Flatiron School. 
          </p>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/ilolo-izu/' className='icon'>LinkedIn</a>
            <a href='https://twitter.com/iloloizu' className='icon'>Twitter</a>
            <a href='https://ilolo.medium.com/' className='icon'>Blog</a>
            <a href='https://github.com/iloloizu' className='icon'>Github</a>

          </div>
        </div>
    </div>
  )
}
