import React from 'react';
import { Link } from 'react-router-dom';
import portfolios from '../components/allportfolios';

function AllProjectsPage() {
  // Sort projects by year (assuming they're from 2021-2022 based on the data)
  const sortedProjects = portfolios.map((project, index) => ({
    ...project,
    year: index < 3 ? '2022' : '2021' // Assign years based on project order
  })).sort((a, b) => b.year.localeCompare(a.year));

  // Extract technologies from project descriptions
  const extractTechnologies = (paragraph) => {
    const techMap = {
      'HTML': 'HTML',
      'CSS': 'CSS', 
      'Javascript': 'JavaScript',
      'ReactJS': 'React',
      'React': 'React',
      'Ruby on Rails': 'Ruby on Rails',
      'Three.js': 'Three.js',
      'Bootstrap': 'Bootstrap',
      'Redux': 'Redux',
      'Material UI': 'Material UI',
      'Postgresql': 'PostgreSQL',
      'Ruby': 'Ruby',
      'SQLite': 'SQLite',
      'JSON': 'JSON'
    };
    
    const foundTechs = [];
    Object.keys(techMap).forEach(tech => {
      if (paragraph.includes(tech)) {
        foundTechs.push(techMap[tech]);
      }
    });
    return foundTechs;
  };

  return (
    <div className="all-projects-page">
      <div className="all-projects-header">
        <Link to="/" className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
        
        <h1 className="all-projects-title">All Projects</h1>
        <p className="all-projects-subtitle">
          A collection of my software development projects showcasing full-stack development, 
          front-end design, and backend architecture skills.
        </p>
      </div>

      <div className="all-projects-content">
        <div className="projects-table">
          <div className="table-header">
            <div className="table-cell">Year</div>
            <div className="table-cell">Project</div>
            <div className="table-cell">Made at</div>
            <div className="table-cell">Built with</div>
            <div className="table-cell">Link</div>
          </div>
          
          {sortedProjects.map((project) => {
            const technologies = extractTechnologies(project.paragraph);
            return (
              <div className="table-row" key={project.id}>
                <div className="table-cell year-cell">
                  {project.year}
                </div>
                <div className="table-cell project-cell">
                  <div className="project-info">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-details">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="table-cell made-at-cell">
                  Flatiron School
                </div>
                <div className="table-cell built-with-cell">
                  <div className="tech-badges">
                    {technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="table-cell link-cell">
                  <div className="project-links">
                    <a 
                      href={project.link1} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.icon1}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a 
                      href={project.link2} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.icon2}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProjectsPage;
