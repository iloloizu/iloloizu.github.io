import React from 'react'
import Resilia from '../images/Resilia.JPG'
import Ripple from '../images/Ripple.JPG'
import Vanguard_Bold from '../images/bold_vangaurd.JPG'

function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      date: "Jan 2025 — Present",
      title: "Application Developer 2",
      company: "Vanguard",
      companyUrl: "https://investor.vanguard.com/",
      description: "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.\n\nAs a Frontend Software Engineer, I develop high-performing web applications and RESTful microservices using React, Node.js, Angular, RxJS, and NgRx, while leveraging AI tools like GitHub Copilot and ChatGPT to enhance development efficiency. I've acted as a de facto Product Engineer for the Auto-Invest app, translating business goals into technical deliverables and leading cross-functional alignment on vision and timelines. My contributions include improving app load time by 70% through Angular performance optimizations, building Node.js and AWS serverless backends that process over 2M records daily, and defining SLOs/SLIs to ensure 99.95% uptime across six microservices. Additionally, I've led org-wide training sessions on performance optimization, observability, and reliability, equipping 30+ engineers and PMs with best practices that improved overall product responsiveness and stability.",
      image: null, // No image for Application Developer 2 as requested
      achievements: null,
      technologies: ["React", "Node.js", "Angular", "RxJS", "NgRx", "AWS Lambda", "AWS S3", "AWS Glue", "Jira", "Appian"]
    },
    {
      id: 2,
      date: "Aug 2023 — Dec 2024",
      title: "Application Developer 1",
      company: "Vanguard",
      companyUrl: "https://investor.vanguard.com/",
      description: "I contributed to the development of the New Investor IRA Experience, which drove $250M in investments, increased overall investment rates by 4%, and achieved a 22% adoption rate of Target Retirement Funds among new clients. I led efforts to resolve key system issues, including Quick Ticket tooltip bugs and order validation inefficiencies, improving reliability, reducing user errors by 15%, and increasing validation accuracy by 20%. Additionally, I enhanced accessibility compliance from 85% to 95%, participated in on-call rotations to reduce MTTR by 10%, and mentored junior engineers through the Black at Vanguard ERG, co-creating a mentorship program to support new crew members while being regularly consulted by leadership for insights on product trade-offs. I consistently received high-impact performance ratings for innovation, leadership, and user-centered delivery.",
      image: Vanguard_Bold,
      achievements: null,
      technologies: ["Angular", "RxJS", "NgRx", "Fastify", "AWS", "PagerDuty"]
    },
    {
      id: 3,
      date: "2023",
      title: "Full-Stack Software Engineer I",
      company: "Resilia",
      companyUrl: "https://www.resilia.com/",
      description: "Resilia is a technology platform with a human touch. Resilia enables nonprofits to increase capacity and funders to go beyond the grant with technical assistance, coaching, and capacity-building support.\n\nAs a Full-Stack Software Engineer I, I developed end-to-end solutions across Heroku and AWS infrastructures while integrating cloud-based services like Stripe, Auth0, Mailgun, and Contentful. I collaborated closely with Product and Design teams to address key challenges faced by nonprofit users, designing and implementing APIs, databases, and user experiences that enhanced platform usability and scalability. By identifying codebase patterns and elevating technical risks early, I helped guide informed engineering decisions and contributed to building a strong technical foundation as an early member of the growing Engineering team at Resilia.",
      image: Resilia,
      achievements: null,
      technologies: ["TypeScript", "Node.js", "React", "GraphQL", "Auth0", "Stripe", "AWS"]
    },
    {
      id: 4,
      date: "2022",
      title: "Full-Stack Software Engineer",
      company: "RippleMatch",
      companyUrl: "https://ripplematch.com/",
      description: "RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers.\n\n Collaborated with key stakeholders and senior engineers from story grooming to company-wide demos, building scalable, state-managed features from concept to implementation. I improved recruiter analytics by adding filter functionality and accessibility enhancements, implemented a third-party API for recruiter tagging and email notifications, and optimized load performance by limiting candidate tracking over six months. Additionally, I designed a custom UI feature for consistent “pill-button” sizing across the platform, contributed unit tests for both frontend and backend tickets, and served on the event planning committee to strengthen collaboration and team culture within the engineering department.",
      image: Ripple,
      achievements: null, 
      technologies: ["Vue.js", "Python", "SQLAlchemy", "Jest"]
    },
    {
      id: 5,
      date: "2015 — Present",
      title: "Internal Auditor & Quality Analysis",
      company: "Izu Group Restaurants",
      companyUrl: "https://www.jackinthebox.com/",
      description: "Izu Group Restaurants operates Jack in the Box locations in Houston, Texas, focusing on quality service and operational excellence in the fast-food industry.",
      image: null, // No image as requested
      achievements: [
        "Conducted data entry and performed detailed analyses of the speed of service and food cost metrics to identify areas for operational improvement. Managed payroll processing, ensuring accuracy and timely compensation for all employees.",
        "Automated KPI dashboards with JavaScript + Google Sheets API, reducing manual errors by 40%.",
        "Designed custom operational tools to track food cost and service speed, enabling data-driven decision-making.",
        "Supported Qu Software pre-sales team in onboarding and solution design, gaining client-facing engineering exposure."
      ],
      technologies: ["JavaScript", "Google Sheets API", "Data Analysis", "Payroll Processing", "KPI Dashboards"]
    }
  ]

  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="experience-entry">
          <div className="experience-timeline-date">
            <span className="timeline-date">{exp.date}</span>
          </div>
          <div className="experience-timeline-content">
            <div className="experience-header">
              <h3 className="experience-title">
                {exp.title} · <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="company-link">
                  {exp.company}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H6.29289L2.14645 8.14645C1.95118 8.34171 1.95118 8.65829 2.14645 8.85355C2.34171 9.04882 2.65829 9.04882 2.85355 8.85355L7 4.70711V7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5V3.5C8 3.22386 7.77614 3 7.5 3H3.5Z" fill="currentColor"/>
                  </svg>
                </a>
              </h3>
            </div>
            
            {exp.image && (
              <div className="experience-image">
                <img src={exp.image} alt={`${exp.company} workplace`} />
              </div>
            )}
            
            <p className="experience-description">
              {exp.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < exp.description.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            
            {exp.achievements && (
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
            
            <div className="experience-technologies">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="resume-download">
        <a href='https://drive.google.com/file/d/1oJ3wIAtZedc-QR4dfED2jEStNOdrt2et/view' target="_blank" rel="noreferrer" className="theme-toggle">
          Download Résumé
        </a>
      </div>
    </div>
  )
}

export default ExperiencePage;