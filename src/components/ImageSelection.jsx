import React from 'react';
import about from '../images/about.png';
import '../styles/_about.scss'

function ImageSelection() {
    return (
        <div className="ImageSelection"><br/>
            {/* <div className="img">
                <img src={about} alt="Ilolo Izu"/>
            </div> */}
            <div className="about-info"><br/>
                <br/>
                <p className="about-text">
After graduating from Texas A&M in 2019 with a degree in Allied Health and a minor in Business Administration, I initially pursued a medical degree as a Physician Associate, but ultimately realized my true calling was in the exciting world of tech.

During my time at university, I not only excelled in my studies, but I also left my mark on the world of athletics as a Track and Field All-American. Additionally, I made sure to give back to my community through various volunteer organizations.

When I'm not working hard to perfect my programming skills, you can find me indulging in my other creative passions such as photography, traveling, playing video games, or sampling new and exciting culinary experiences. In short, I am a person who never stops exploring and is always on the lookout for my next big adventure. I'm currently a Software Engineer at Vanguard.
                </p> 
                <br/> <a href='https://drive.google.com/file/d/1oJ3wIAtZedc-QR4dfED2jEStNOdrt2et/view' target="_blank" rel="noreferrer">
                <button className="theme-toggle">Download Résumé</button></a>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default ImageSelection;