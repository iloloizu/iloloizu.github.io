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
      description: "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
      image: null, // No image for Application Developer 2 as requested
      achievements: [
        "Frontend Software Engineer working in React, NodeJS, Angular, RxJS, and NgRx. Building Angular web applications and RESTful microservices. Utilizing AI services such as Copilot, ChatGPT.",
        "Acted as a de facto Product Engineer for key initiatives in the Auto-Invest app, translating business goals into technical deliverables and aligning cross-functional teams on product vision and delivery timelines.",
        "Spearheaded the performance optimization of the Auto-Invest app, improving app load time by 70% through refactoring Angular's change detection strategy—directly enhancing user experience and engagement.",
        "Developed and maintained the \"Manage the Loop\" feature using React.js, bridging the gap between Jira and Appian, enabling advisors to seamlessly monitor task progress, synchronize updates, and reduce manual reconciliation.",
        "Developed and maintained Node.js-based middle-tier services for Auto-Invest functionality across ETFs, mutual funds, and Roth IRAs, supporting scheduled investment execution and account eligibility checks.",
        "Built a serverless backend with AWS Lambda, S3, and AWS Glue to process 2M+ records daily, cutting infrastructure costs by 20% while maintaining sub-second latency.",
        "Defined, monitored, and reported SLOs/SLIs across six microservices, ensuring 99.95% uptime and reliability for 10K+ daily advisor interactions.",
        "Designed modular services for logging, gatekeeping, and authentication, ensuring secure transaction flows, and scalable orchestration between front-end triggers and backend investment engines.",
        "Delivered and demoed a departmental knowledge-sharing session on performance optimization, empowering 30+ engineers with techniques that improved app responsiveness across the org.",
        "Co-led a quarterly training series on Honeycomb and PagerDuty tooling for developers and PMs, fostering a shared understanding of product reliability, observability, and customer support strategy."
      ],
      technologies: ["React", "Node.js", "Angular", "RxJS", "NgRx", "AWS Lambda", "AWS S3", "AWS Glue", "Jira", "Appian"]
    },
    {
      id: 2,
      date: "Aug 2023 — Dec 2024",
      title: "Application Developer 1",
      company: "Vanguard",
      companyUrl: "https://investor.vanguard.com/",
      description: "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
      image: Vanguard_Bold,
      achievements: [
        "Contributed to the development of the New Investor IRA Experience, which drove $250M in investments and resulted in a 4% increase in overall investment rates and a 22% adoption rate of Target Retirement Funds (TRFs) by new clients.",
        "Led the resolution of Quick Ticket tooltip issues, improving system reliability and reducing reported user errors by 15%.",
        "Optimized order validation for quick transactions and automated investment ETF pages, increasing validation accuracy by 20% and reducing processing times for efficient order handling.",
        "Enhanced accessibility on the New IRA Page, improving compliance from 85% to 95%, ensuring WCAG standards.",
        "Contributed to PagerDuty on-call rotations, reducing MTTR by 10% through timely response, improving system reliability.",
        "Co-Created a mentorship program for new crew at Vanguard through Vanguard's Black at Vanguard ERG.",
        "Mentored a junior engineer through the Black at Vanguard ERG, fostering career growth, product sense, and cross-team visibility.",
        "Regularly consulted by senior leadership for insights on product feature trade-offs due to deep domain expertise in investing workflows and Vanguard platform capabilities.",
        "Received multiple high-impact ratings in quarterly reviews for innovation, thought leadership, and consistent delivery of user-centered features under tight deadlines."
      ],
      technologies: ["Angular", "RxJS", "NgRx", "Fastify", "AWS", "PagerDuty"]
    },
    {
      id: 3,
      date: "2023",
      title: "Full-Stack Software Engineer I",
      company: "Resilia",
      companyUrl: "https://www.resilia.com/",
      description: "Resilia is a technology platform with a human touch. Resilia enables nonprofits to increase capacity and funders to go beyond the grant with technical assistance, coaching, and capacity-building support.",
      image: Resilia,
      achievements: [
        "Worked as a Full-Stack Software Engineer I with: Typescript, node, GraphQL APIs, ReactJS, Material UI design components, cloud-based platforms (Stripe, Auth0, Mailgun, Contentful, etc.), Heroku infrastructure, AWS infrastructure",
        "Software development experience with proficiency in frontend and backend frameworks/languages, testing practices and frameworks, API design and implementation, and database design and migrations. Collaborated with Product and Design teams to understand and solve core problems faced by nonprofit users",
        "Built end-to-end technology solutions with hands-on experience in UX, API, and DB layers",
        "Navigated codebase to identify patterns and antipatterns for building new product features",
        "Elevated risks and unknowns with proposed tools and technologies to make informed decisions with Engineering, Product, and Design teams",
        "Directly impacted nonprofit users by enabling seamless utilization of Resilia's platform and helping nonprofits strengthen operations, scale impact, and communicate work",
        "Early and crucial contributor to growing Engineering team, reporting to the Director of Engineering"
      ],
      technologies: ["TypeScript", "Node.js", "React", "GraphQL", "Auth0", "Stripe", "AWS"]
    },
    {
      id: 4,
      date: "2022",
      title: "Full-Stack Software Engineer",
      company: "RippleMatch",
      companyUrl: "https://ripplematch.com/",
      description: "RippleMatch is the recruitment automation platform changing how Gen Z finds work. By replacing job boards with matching and automation, RippleMatch eliminates the most time-intensive parts of the recruitment process for both employers and job seekers.",
      image: Ripple,
      achievements: [
        "Worked as a Full-Stack Software Engineer primarily with Vue.js, Python, Jest, and SQLAlchemy",
        "Worked with key stakeholders and Senior Engineers in an Agile Environment: from story grooming sessions to a live demo presentation to the entire company",
        "Built scalable features from concept to implementation. Worked on projects dealing with state management",
        "Created improvements to the recruiter analytics by adding filtering options. This included displaying the currently applied filters, assisting with accessibility",
        "Implemented a third-party API that allows recruiters to tag each other, thus being notified by email",
        "Worked on limiting the number of candidates tracked by email links within 6 months positively affecting load performance when viewing analytics as a recruiter",
        "Implemented and constructed my own UI/UX feature to help display appropriate 'pill-button' sizing throughout the site",
        "Experience blogs unit tests for Frontend and Backend tickets",
        "Part of the event planning committee to help foster interpersonal and collaborative skills throughout the engineering dept"
      ],
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
            
            <p className="experience-description">{exp.description}</p>
            
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
            
            <div className="experience-technologies">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="resume-download">
        <a href='https://drive.google.com/file/d/1oJ3wIAtZedc-QR4dfED2jEStNOdrt2et/view' target="_blank" rel="noreferrer" className="btn">
          Download Résumé
        </a>
      </div>
    </div>
  )
}

export default ExperiencePage;