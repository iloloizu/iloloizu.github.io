import React from 'react'
import portfolios from '../components/allportfolios'

export default function Projects() {
  const preview = portfolios.slice(0, 3)
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="portfolis">
          {preview.map((item) => (
            <div className="portfolio" key={item.id}>
              <div className="image-data">
                <img src={item.image} alt="Project"/>
                <h5>{item.title}</h5>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-row" style={{marginTop: '16px'}}>
          <a className="btn" href="/projects">View all projects</a>
        </div>
      </div>
    </section>
  )
}


