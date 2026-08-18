import React from 'react'
import Resilia from '../images/Resilia.JPG'
import Ripple from '../images/Ripple.JPG'
import Vanguard_Bold from '../images/bold_vangaurd.JPG'

function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      date: "Jan 2026 — Present",
      title: "Lead AI Product Engineer | Marketplace",
      company: "Lawtrades",
      companyUrl: "https://www.lawtrades.com/",
      description: "Lawtrades is the legal talent marketplace connecting top companies with elite attorneys and legal professionals on demand.\n\nProduct Strategy and Development Lead for an AI and agent-powered legal experience on a leading attorney marketplace, expanding platform capabilities and driving user engagement. Forward Deployed Engineering work across the stack — interviewing users, planning product from inception to rollout, and building, using, and training AI. AI. AI. ...and more AI.",
      image: null,
      achievements: null,
      technologies: ["React", "Node.js", "Sails.js", "Python", "PostgreSQL", "Claude API", "AI Agents", "Google Cloud"]
    },
    {
      id: 2,
      date: "Jan 2025 — Dec 2025",
      title: "Application Developer 2",
      company: "Vanguard",
      companyUrl: "https://investor.vanguard.com/",
      description: "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.\n\nDeveloped high-performing web applications and RESTful microservices using React, Node.js, Angular, and AWS, improving load times by 70% and ensuring 99.95% uptime across six microservices. Led product-aligned engineering efforts for the Auto-Invest app, translating business goals into technical deliverables and training 30+ engineers and PMs on performance, observability, and reliability best practices.",
      image: null, // No image for Application Developer 2 as requested
      achievements: null,
      technologies: ["React", "Node.js", "Angular", "RxJS", "NgRx", "AWS Lambda", "AWS S3", "AWS Glue", "Jira", "Appian"]
    },
    {
      id: 3,
      date: "Aug 2023 — Dec 2024",
      title: "Application Developer 1",
      company: "Vanguard",
      companyUrl: "https://investor.vanguard.com/",
      description: "Delivered the New Investor IRA Experience, driving $250M in investments, boosting investment rates by 4%, and raising accessibility compliance from 85% to 95%. Led reliability and validation improvements that reduced user errors by 15%, mentored junior engineers through an ERG mentorship program, and earned top performance ratings for innovation and leadership.",
      image: Vanguard_Bold,
      achievements: null,
      technologies: ["Angular", "RxJS", "NgRx", "Fastify", "AWS", "PagerDuty"]
    },
    {
      id: 4,
      date: "2023",
      title: "Full-Stack Software Engineer I",
      company: "Resilia",
      companyUrl: "https://www.resilia.com/",
      description: "Resilia is a technology platform with a human touch. Resilia enables nonprofits to increase capacity and funders to go beyond the grant with technical assistance, coaching, and capacity-building support.\n\nBuilt end-to-end solutions across Heroku and AWS, integrating Stripe, Auth0, and Contentful to enhance usability and scalability for nonprofit users. Collaborated with Product and Design teams to deliver impactful features, surface technical risks early, and strengthen the engineering foundation as an early team member.",
      image: Resilia,
      achievements: null,
      technologies: ["TypeScript", "Node.js", "React", "GraphQL", "Auth0", "Stripe", "AWS"]
    },
    {
      id: 5,
      date: "2022",
      title: "Full-Stack Software Engineer",
      company: "RippleMatch",
      companyUrl: "https://ripplematch.com/",
      description: "RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers.\n\n Built scalable, state-managed features from concept to launch, improving recruiter analytics, accessibility, and load performance through optimized data handling and third-party API integrations. Designed consistent UI components, contributed full-stack unit tests, and strengthened engineering culture through event planning and cross-team collaboration.",
      image: Ripple,
      achievements: null, 
      technologies: ["Vue.js", "Python", "SQLAlchemy", "Jest"]
    },
    {
      id: 6,
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
      
      <div>
        <a href={`${process.env.PUBLIC_URL}/Ilolo_Izu_Resume_2026.pdf`} target="_blank" rel="noreferrer" className="theme-toggle">
          Download Résumé
        </a>
      </div>
    </div>
  )
}

export default ExperiencePage;