import React from 'react'
import Title from '../components/Title'
import ImageSelection from '../components/ImageSelection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'
import leadership from '../images/Leadershipweb.png'
import photography from '../images/Photography.jpg'
import webdesign from '../images/WebDesign.JPG'
import track from '../images/trackweb.png'

export default function AboutPage() {
  return (
    <div>
      <Title title={'About Me'} span={'About Me'}/>
      
      <ImageSelection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'75%'} length={'75%'} />
                <SkillsSection skill={'Ruby'} progress={'60%'} length={'60%'} />
                <SkillsSection skill={'ReactJS'} progress={'75%'} length={'75%'} />
                <SkillsSection skill={'SQLite'} progress={'40%'} length={'40%'} />
                <SkillsSection skill={'CSS'} progress={'70%'} length={'70%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} length={'90%'} />
                <SkillsSection skill={'Object Oriented Programming'} progress={'40%'} length={'40%'} />
                <SkillsSection skill={'Data Structures & Algorithms'} progress={'20%'} length={'20%'} />
                <SkillsSection skill={'Adobe Photoshop'} progress={'80%'} length={'80%'} />
                <SkillsSection skill={'Adobe Premier Pro'} progress={'90%'} length={'90'} />
                <SkillsSection skill={'Willingness to Learn'} progress={'100%'} length={'100%'} />
                <SkillsSection skill={'Coachable'} progress={'100%'} length={'100%'} />
            </div>

            <Title title={'Traits'} span={'Traits'} />
            <div className="servives-container">
            <hr/>
                <ServicesSection image={webdesign} title={'Web Design'} alt="Ilolo studying at Flatiron School"
                text={`In November of 2021 I took a leap of faith and enrolled Software Engineering Bootcamp—and I've yet to look back. Flatiron School is a Full-stack web development in Ruby on Rails, JavaScript (ES6), React, Redux, HTML5, CSS3, API Development, Authentication and Authorization, Object-Oriented Programming, SQL, Sinatra, ActiveRecord, JSON.`}
                /> <hr/>
                <ServicesSection image={leadership} title={'Leadership & Teamwork'} alt="Ilolo receiving the Distinguished Letterman's Award" 
                text={'In 2019, I received the Distinguished Letterman Award from Texas A&M University. It is the highest award presented to a student-athlete by the athletics department. The individual is someone who displays extraordinary talents in the areas of athletics, scholarship, leadership, and service.'}
                /> <hr/>
                <ServicesSection image={photography} title={'Photograpy & Videography'} alt="Ilolo taking pictures from a helicopter in NYC"
                text={'My experience working with videography dates back 15+ years when I would create my own home films with Windows Movie Maker. I have over 10 years of experience with iMovie and began transitioning to the Adobe Ecosystem within the past 6+ years. Videography is my original passion. I love been able to implement creativity from this side of myself to the world of Web Design.'}
                /> <hr/>
                <ServicesSection image={track} title={'Determination & Grit'} alt="Ilolo winning Texas Relays in the 400 meter hurdles"
                text={'World Record and American Record Holder in Indoor 4x400 Meter Relay. Managed a full academic course load (15+ hours), in addition to nearly 30-40 hours per week of practice, team meetings, track meets, and travel. Developed leadership as a team captain; teamwork by working and listening to those in the same environment; and resilience, by working day-to-day for a goal years ahead.'}
                /> <hr/>

            </div>
    </div>
  )
}
