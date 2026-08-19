import React from 'react'
import { Link } from 'react-router-dom'
import EditorialLayout from '../layout/EditorialLayout'
import portfolios from '../components/allportfolios'
import allBlogs from '../components/allBlogs'
import EdHurdles from '../components/EdHurdles'
import lawtradesLogo from '../images/logos/lawtrades.png'
import resiliaLogo from '../images/logos/resilia.png'
import ripplematchLogo from '../images/logos/ripplematch.png'
import jackLogo from '../images/logos/jackinthebox.png'

// titles and dates mirror LinkedIn
const experience = [
  { company: 'Lawtrades', role: 'Lead AI Product Engineer', dates: '2026—Now', url: 'https://www.lawtrades.com/', logo: lawtradesLogo, logoStyle: 'pad' },
  {
    company: 'Vanguard',
    dates: '2023—2026',
    url: 'https://investor.vanguard.com/',
    vanguardTile: true,
    roles: [
      { title: 'Software Engineer II', dates: '2025—2026' },
      { title: 'Software Engineer I', dates: '2023—2025' },
    ],
  },
  { company: 'Resilia', role: 'Software Engineer', dates: '2023', url: 'https://www.resilia.com/', logo: resiliaLogo, logoStyle: 'cover' },
  { company: 'RippleMatch', role: 'Associate Software Engineer', dates: '2022', url: 'https://ripplematch.com/', logo: ripplematchLogo, logoStyle: 'cover' },
  { company: 'Izu Group Restaurants', role: 'Product Owner · Internal Auditing', dates: '2017—Now', url: 'https://www.jackinthebox.com/', logo: jackLogo, logoStyle: 'cover' },
]

function Tile({ job }) {
  if (job.vanguardTile) {
    return <div className="ed-tile ed-tile--vanguard" aria-hidden="true">V</div>
  }
  if (job.logo) {
    return (
      <div className={`ed-tile ed-tile--${job.logoStyle}`} aria-hidden="true">
        <img src={job.logo} alt="" />
      </div>
    )
  }
  return <div className="ed-tile" aria-hidden="true">{job.company.charAt(0)}</div>
}

export default function EditorialHome() {
  const recentWork = portfolios.slice(0, 5)
  const [featured, ...gridWork] = recentWork
  const writing = allBlogs.slice(0, 4)

  return (
    <EditorialLayout>
      <h1 className="ed-hero">AI Engineer, Athlete,<br />MBA Candidate</h1>

      <div className="ed-intro">
        <p className="ed-thesis">
          My college coach used to end every practice the same way: don't let the day get away.
  He meant it about workouts, but it's held up for everything since. I build AI products
  now (mostly things that take a tedious human process and quietly do it faster), and the
  job turns out to be the same job: pay attention to the person on the other end, ship
  before it feels safe, and be willing to find out the third version was wrong.
          I've always been a firm believer that the best products come from teams with empathy and pace: people who understand
          real users deeply, ship quickly, and refine without ego. 
          "Don't let the day get away."
        </p>
      </div>

      <h2 className="ed-label">Experience</h2>
      <div className="ed-rows">
        {experience.map((job) => (
          <React.Fragment key={job.company + (job.role || '')}>
            <a className="ed-row" href={job.url} target="_blank" rel="noreferrer">
              <Tile job={job} />
              <div className="ed-row-body">
                <div className="ed-row-title">{job.company}</div>
                {job.role && <div className="ed-row-sub">{job.role}</div>}
              </div>
              <div className="ed-row-date">{job.dates}</div>
            </a>
            {job.roles && (
              <div className="ed-subroles">
                {job.roles.map((r) => (
                  <div className="ed-subrole" key={r.title}>
                    <span className="ed-subrole-title">{r.title}</span>
                    <span className="ed-row-date">{r.dates}</span>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <hr className="ed-divider" />

      <section className="ed-interlude">
        <div className="ed-interlude-text">
          <h2 className="ed-interlude-title">I love the reps</h2>
          <p>
            I build AI products in New York. I learn almost everything the same way, by working on it: "Hard work beats talent when talent doesn't work hard." That's how sprinting went at Texas A&M, and it's how my personal projects got built. In between there's an MBA at Rice University, a Sony a6400 I actually use, a Thursday night D&D group I've had for 10 years, and a kitchen I host out of more than I should.
          </p>
        </div>
        <figure className="ed-interlude-doodle">
          <EdHurdles />
          <figcaption className="ed-doodle-caption">The Training Plan</figcaption>
        </figure>
      </section>

      <hr className="ed-divider" />

      <h2 className="ed-label">Recent Work</h2>
      <div className="ed-cards">
        {featured && (
          <Link className="ed-card ed-card--featured" to="/projects">
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
        <Link className="ed-row" to="/projects">
          <div className="ed-row-body">
            <div className="ed-row-title">View all work →</div>
          </div>
        </Link>
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
