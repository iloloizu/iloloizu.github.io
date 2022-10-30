import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SkillsSection({skill, progress, length, icon}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <div className="skill-header">
                    <h5 className="skill-title">{skill}</h5>
                    { icon ? 
                    <FontAwesomeIcon className="language-icon" icon={icon} /> : null }
                </div>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width: length}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;