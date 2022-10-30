import React from 'react';
import about from '../images/about.png';
import '../styles/_about.scss'

function ImageSelection() {
    return (
        <div className="ImageSelection"><br/>
            <div className="img">
                <img src={about} alt="Ilolo Izu"/>
            </div>
            <div className="about-info"><br/>
                <h2><span> Ilolo Izu</span>, Software Engineer</h2><br/>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Languages:</p>
                        <p>Location:</p>
                        <p>Open to Relocate:</p>
                    </div>
                    <div className="right-section">
                        <p> Justin Ilolo Izu</p>
                        <p> 25</p>
                        <p> English, Spanish (Limited Working Proficiency)</p>
                        <p> Houston, TX, USA</p>
                        <p> Yes </p>
                    </div>
                </div>
                <br/>
                <p className="about-text">
                My name is Ilolo Izu (e-lo-lo e-zu). I graduated with a Bachelor's degree focused in Allied Health with a Minor in Business Administration from Texas A&M University in December 2019. Later, I enrolled in the Software Engineering program at Flatiron School. 
                Throughout the program, I created three web applications in Javascript, React, SQLite, and Ruby gaining technical experience. I'm very passionate for building web applications and learning new technologies. My most recent experience comes from working as an Associate Software Engineer at 
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:6937548719974219776/' target="_blank" rel="noreferrer"> RippleMatch</a>. I'm looking primarily for Frontend Software Engineering roles, and secondly for roles as a Full-Stack Software Engineer. I am very interested in being in an environment where I can grow, learning languages such as Python, Java, C#, C++, Vue.js, three.js, etc, or bettering my growing interest in UI/UX. 
                </p> 
                <br/> <a href='https://drive.google.com/file/d/1_A8Hw4TRP2WjslKzHFItAY9KynUAgmLC/view?usp=sharing' target="_blank" rel="noreferrer">
                <button className="btn">Download Résumé</button></a>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    )
}

export default ImageSelection;