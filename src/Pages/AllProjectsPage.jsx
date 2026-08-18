import React from 'react'
import EditorialLayout from '../layout/EditorialLayout'
import portfolios from '../components/allportfolios'

function AllProjectsPage() {
  const sortedProjects = [...portfolios].sort((a, b) => b.year.localeCompare(a.year))

  return (
    <EditorialLayout>
      <h2 className="ed-label">All Work</h2>
      <h1 className="ed-page-title">Projects</h1>
      <p className="ed-page-intro">
        Software I&rsquo;ve built across full-stack development, front-end design, and
        backend architecture — from consulting engagements to personal experiments.
      </p>

      <div className="ed-rows">
        {sortedProjects.map((project) => {
          const RowContent = (
            <>
              <div className="ed-tile ed-tile--cover" aria-hidden="true">
                <img src={project.image} alt="" />
              </div>
              <div className="ed-row-body">
                <div className="ed-row-title">{project.title}</div>
                <div className="ed-row-sub">
                  {project.madeAt}
                  {project.link1 && (
                    <span className="ed-row-links">
                      <a href={project.link1} target="_blank" rel="noreferrer">{project.icon1}</a>
                      {project.link2 && (
                        <a href={project.link2} target="_blank" rel="noreferrer">{project.icon2}</a>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="ed-row-date">{project.year}</div>
            </>
          )

          return project.link1 ? (
            <a key={project.id} className="ed-row" href={project.link1} target="_blank" rel="noreferrer">
              {RowContent}
            </a>
          ) : (
            <div key={project.id} className="ed-row">
              {RowContent}
            </div>
          )
        })}
      </div>
    </EditorialLayout>
  )
}

export default AllProjectsPage
