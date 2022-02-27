import React from 'react'

function SkillsSection({skill,progress, length}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
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