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
                        <p> 24</p>
                        <p> English, Spanish (Limited Working Proficiency)</p>
                        <p> Houston, TX, USA</p>
                        <p> Yes </p>
                    </div>
                </div>
                <br/>
                <p className="about-text">
                My name is Ilolo Izu (e-lo-lo e-zu), known some places by my first name—Justin! I graduated with a Bachelor's degree focused in Allied Health with a Minor in Business Administration from Texas A&M University in December 2019. I am transitioning from the 4 years of experience in the Medical Field. I'm currently enrolled in the Software Engineering program at Flatiron School. So far in the program, I have created three web applications in Javascript, React, SQLite, and Ruby. Some examples are a health and wellness calendar/to-do list and a wishlist app. I have learned HTML, CSS, Javascript, React, SQL, and Ruby. In the coming weeks, I will learn Ruby on Rails, Sinatra, and more. 
                I'm looking for Frontend Software Engineering roles primarily, and secondly for roles as a Full-Stack Software Engineer. I am very interested in being in an environment where I can grow, learning languages such as Python, Java, C#, C++, Vue.js, three.js, etc, or bettering my growing interest in UI/UX. 
                </p> 
                <br/> <a href='https://drive.google.com/file/d/1QzcREXV8AaufL-Um-geL6Q4WFE6bZrkm/view?usp=sharing' target="_blank">
                <button className="btn">Download Résumé</button></a>
                <br/> <a href='https://drive.google.com/file/d/1NBmiCO9gu5XBVaNNbOQutQlVzkdq8iXZ/view?usp=sharing' target="_blank">
                <button className="btn">Download Cover Letter</button></a>
                <br/>
                <br/>
                <br/><br/>

            </div>
        </div>
    )
}

export default ImageSelection;