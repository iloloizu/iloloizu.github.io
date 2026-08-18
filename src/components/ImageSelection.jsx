import React from 'react';
import about from '../images/about.png';
import '../styles/_about.scss'

function ImageSelection() {
    return (
        <div>
            <div className="about-info">
                <p className="about-text">
                I’m Ilolo Izu (e-lo-lo e-zu), a Product-oriented Full-Stack Software Engineer from Houston, TX—currently leading AI product engineering at Lawtrades, building an AI and agent-powered legal experience for a leading attorney marketplace. Former All-American Track & Field athlete turned technologist, blending technical depth with sharp communication, empathy, and adaptability. My journey from healthcare to software engineering fuels a passion for solving real user problems and building intuitive, high-impact solutions. Outside of work, I’m all about fitness, <a 
    href="https://www.iloloizu.com/#/portfolio" 
    className="portfolio-link"
    target="_blank"
    rel="noopener noreferrer"
    style={{
        color: 'var(--accent)',
        textDecoration: 'none',
        position: 'relative',
        transition: 'color 0.25s'
    }}
    onMouseOver={e => {
        e.target.style.textDecoration = 'none';
        e.target.style.textDecorationColor = '#FFD600'; // bright yellow
        e.target.style.color = '#var(--accent)';
    }}
    onMouseOut={e => {
        e.target.style.textDecoration = 'none';
        e.target.style.color = 'var(--accent)';
    }}
>
photography
</a>, traveling, cooking, and creating genuine connections wherever I go.
                </p> 
                <br/> <a href={`${process.env.PUBLIC_URL}/Ilolo_Izu_Resume_2026.pdf`} target="_blank" rel="noreferrer">
                <button className="theme-toggle">Download Résumé</button></a>
                <br/>
            </div>
        </div>
    )
}

export default ImageSelection;