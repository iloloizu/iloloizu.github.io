import React from 'react'
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';

function ExperiencePage() {
const rippleMatch = "https://media-exp1.licdn.com/dms/image/C5622AQH-i00mEmGFjw/feedshare-shrink_2048_1536/0/1654040507406?e=1669852800&v=beta&t=oZstMr2vtBF9rqd5aarodciqZbkMBz1Szg_VlWn6-PA"
                
  return (
    <>
        <div className="experience_page_title">
            <Title title={'Professional Experience'} span={'Professional'} />
        </div>
        <div className='experiencePage'>
            <ServicesSection image={rippleMatch} title={'RippleMatch - 2022'} text={`RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers. Leading employers such as Amazon, eBay, and Teach For America leverage RippleMatch to build diverse, high-performing teams and Gen Z job seekers across the country trust RippleMatch to launch and grow their careers.`} />
            <div class="row">
                <div class="col">
                    <ul>
                        <li className='li_included'>Worked as a Full-Stack Software Engineer primarily with Vue.js, Python, Jest, and SQLAlchemy</li>
                        <li className='li_included'>Worked with key stakeholders and Senior Engineers in an Agile Environment: from story grooming sessions to a live demo presentation to the entire company</li>
                        <li className='li_included'>Built scalable features from concept to implementation.Worked on projects dealing with state management.</li>
                        <li className='li_included'>Created improvements to the recruiter analytics by adding filtering options. This included displaying the currently applied filters, assisting with accessibility</li>
                        <li className='li_included'>Implemented a third-party API that allows recruiters to tag each other, thus being notified by email</li>
                        <li className='li_included'>Worked on limiting the number of candidates tracked by email links within 6 months positively affecting load performance when viewing analytics as a recruiter</li>
                        <li className='li_included'>Implemented and constructed my own UI/UX feature to help display appropriate ‘pill-button’ sizing throughout the site.</li>
                        <li className='li_included'>Experience writing unit tests for Frontend and Backend tickets.</li>
                        <li className='li_included'>Part of the event planning committee to help foster interpersonal and collaborative skills throughout the engineering dept.</li> 
                    </ul>
                </div>
            </div>
            <a href='https://drive.google.com/file/d/1_A8Hw4TRP2WjslKzHFItAY9KynUAgmLC/view?usp=sharing' target="_blank" rel="noreferrer">
                <button className="btn">Download Résumé</button>
            </a>
        </div>
    </>
  )
}

export default ExperiencePage;