import React from 'react'
import { Link } from 'react-router-dom'
import EditorialLayout from '../layout/EditorialLayout'
import portfolios from '../components/allportfolios'
import allBlogs from '../components/allBlogs'

const experience = [
  { company: 'Lawtrades', role: 'Lead AI Product Engineer', dates: '2026—Now', url: 'https://www.lawtrades.com/' },
  { company: 'Vanguard', role: 'Application Developer I & II', dates: '2023—2025', url: 'https://investor.vanguard.com/' },
  { company: 'Resilia', role: 'Full-Stack Software Engineer I', dates: '2023', url: 'https://www.resilia.com/' },
  { company: 'RippleMatch', role: 'Full-Stack Software Engineer', dates: '2022', url: 'https://ripplematch.com/' },
  { company: 'Izu Group Restaurants', role: 'Internal Auditor & QA', dates: '2015—Now', url: 'https://www.jackinthebox.com/' },
]

const selectedWork = [
  { title: 'SkillTrack', sub: 'React, TypeScript', year: '2025', href: 'https://iloloizu.github.io/HU-interview/' },
  { title: 'Stylo', sub: 'React Native, Supabase', year: '2025', href: 'https://youtube.com/shorts/9dKA-wHPzV4' },
  { title: 'ServePro', sub: 'Angular, Node, GraphQL', year: '2025' },
  { title: 'Photography', sub: 'Travel, Street, Sport', year: 'Ongoing', to: '/portfolio' },
]

function Row({ title, sub, date, tile }) {
  return (
    <>
      <div className="ed-tile" aria-hidden="true">{tile || title.charAt(0)}</div>
      <div className="ed-row-body">
        <div className="ed-row-title">{title}</div>
        {sub && <div className="ed-row-sub">{sub}</div>}
      </div>
      <div className="ed-row-date">{date}</div>
    </>
  )
}

export default function EditorialHome() {
  const recentWork = portfolios.slice(0, 5)
  const [featured, ...gridWork] = recentWork
  const writing = allBlogs.slice(0, 4)

  return (
    <EditorialLayout>
      <h1 className="ed-hero">AI Engineer,<br />Maker, Sprinter</h1>

      <div className="ed-intro">
        <p className="ed-thesis">
          Great products come from teams with empathy and pace — people who understand
          real users deeply, ship quickly, and refine without ego.
        </p>
        <p>
          I&rsquo;m Ilolo Izu (e&#8209;lo&#8209;lo e&#8209;zu), a product-oriented engineer from Houston, TX —
          currently leading AI product engineering at Lawtrades, building an AI and
          agent-powered legal experience for a leading attorney marketplace. Former
          All-American track &amp; field athlete turned technologist; my path from
          healthcare to software fuels a passion for solving real user problems.
          Outside of work I&rsquo;m all about fitness, <Link to="/portfolio">photography</Link>,
          traveling, cooking, and creating genuine connections wherever I go.
        </p>
      </div>

      <h2 className="ed-label">Experience</h2>
      <div className="ed-rows">
        {experience.map((job) => (
          <a key={job.company + job.role} className="ed-row" href={job.url} target="_blank" rel="noreferrer">
            <Row title={job.company} sub={job.role} date={job.dates} />
          </a>
        ))}
      </div>

      <hr className="ed-divider" />

      <h2 className="ed-label">Selected Work</h2>
      <div className="ed-rows">
        {selectedWork.map((work) => (
          work.to ? (
            <Link key={work.title} className="ed-row" to={work.to}>
              <Row title={work.title} sub={work.sub} date={work.year} />
            </Link>
          ) : (
            <a key={work.title} className="ed-row" href={work.href} target={work.href ? '_blank' : undefined} rel="noreferrer">
              <Row title={work.title} sub={work.sub} date={work.year} />
            </a>
          )
        ))}
      </div>

      <hr className="ed-divider" />

      <h2 className="ed-label">Recent Work</h2>
      <div className="ed-cards">
        {featured && (
          <Link className="ed-card" to="/projects">
            <div className="ed-card-media">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="ed-card-caption">
              <span className="ed-card-title">{featured.title}</span>
              <span className="ed-card-year">{featured.year}</span>
            </div>
          </Link>
        )}
        <div className="ed-card-grid">
          {gridWork.map((item) => (
            <Link className="ed-card" to="/projects" key={item.id}>
              <div className="ed-card-media">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="ed-card-caption">
                <span className="ed-card-title">{item.title}</span>
                <span className="ed-card-year">{item.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <hr className="ed-divider" />

      <h2 className="ed-label">Writing</h2>
      <div className="ed-rows">
        {writing.map((blog) => (
          <a key={blog.id} className="ed-row" href={blog.link} target="_blank" rel="noreferrer">
            <div className="ed-row-body">
              <div className="ed-row-title">{blog.title}</div>
            </div>
            <div className="ed-row-date">{blog.month} {blog.year}</div>
          </a>
        ))}
        <Link className="ed-row" to="/blogs">
          <div className="ed-row-body">
            <div className="ed-row-title">View all writing →</div>
          </div>
        </Link>
      </div>
    </EditorialLayout>
  )
}
