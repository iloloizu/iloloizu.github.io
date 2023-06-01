import React from 'react'
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import Resilia from '../images/Resilia.JPG'
import Ripple from '../images/Ripple.JPG'

function ExperiencePage() {
const rippleMatch = Ripple
const resilia = Resilia
                
  return (
    <>
        <div className="experience_page_title">
            <Title title={'Professional Experience'} span={'Professional'} />
        </div>
        <div className='experiencePage'>
            <ServicesSection image={resilia} title={'Resilia - 2023'} text={`Resilia is a technology platform with a human touch. Resilia enables nonprofits to increase capacity and funders to go beyond the grant with technical assistance, coaching, and capacity-building support.`} />
            <div className="row">
                <div className="col">
                    <ul>
                        <li className='li_included'>Worked as a Full-Stack Software Engineer I with: Typescript, node, GraphQL APIs, ReactJS, Material UI design
components, cloud-based platforms (Stripe, Auth0, Mailgun, Contentful, etc.), Heroku infrastructure, AWS infrastructure</li>
                        <li className='li_included'>Software development experience with proficiency in frontend and backend frameworks/languages, testing practices and frameworks, API design and implementation, and database design and migrations
                            Collaborated with Product and Design teams to understand and solve core problems faced by nonprofit users</li>
                        <li className='li_included'>Built end-to-end technology solutions with hands-on experience in UX, API, and DB layers</li>
                        <li className='li_included'>Navigated codebase to identify patterns and antipatterns for building new product features</li>
                        <li className='li_included'>Elevated risks and unknowns with proposed tools and technologies to make informed decisions with Engineering, Product, and Design teams</li>
                        <li className='li_included'>Directly impacted nonprofit users by enabling seamless utilization of Resilia's platform and helping nonprofits strengthen operations, scale impact, and communicate work</li>
                        <li className='li_included'>Early and crucial contributor to growing Engineering team, reporting to the Director of Engineering</li>
                    </ul>
                </div>
            </div>
            <ServicesSection image={rippleMatch} title={'RippleMatch - 2022'} text={`RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers. Leading employers such as Amazon, eBay, and Teach For America leverage RippleMatch to build diverse, high-performing teams and Gen Z job seekers across the country trust RippleMatch to launch and grow their careers.`} />
            <div className="row">
                <div className="col">
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
            <a href='https://drive.google.com/file/d/1je840_FP3SOzODyRbCtK07uc4kdmEdCA/view?usp=sharing' target="_blank" rel="noreferrer">
                <button className="btn">Download Résumé</button>
            </a>
        </div>
    </>
  )
}

export default ExperiencePage;