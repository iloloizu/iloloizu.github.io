import React from 'react'
import { Link } from 'react-router-dom'
import EditorialLayout from '../layout/EditorialLayout'
import EdBack from '../components/EdBack'
import headshot from '../images/headshot_bw.jpg'

export default function EditorialAbout() {
  return (
    <EditorialLayout>
      <EdBack />
      <h2 className="ed-label">About</h2>
      <h1 className="ed-page-title">Ilolo Izu</h1>

      <div className="ed-about">
        <img className="ed-headshot ed-headshot--about" src={headshot} alt="Ilolo Izu" />
        <div className="ed-about-body">
          <p>
            I&rsquo;m Ilolo Izu (e&#8209;lo&#8209;lo e&#8209;zu), a product-oriented engineer from Houston, TX —
            currently leading AI product engineering at Lawtrades, building an AI and
            agent-powered legal experience for a leading attorney marketplace. Former
            All-American track &amp; field athlete turned technologist; my path from
            healthcare to software fuels a passion for solving real user problems.
          </p>
          <p>
            Outside of work I&rsquo;m all about fitness, <Link to="/portfolio">photography</Link>,
            traveling, cooking, and creating genuine connections wherever I go.
          </p>
        </div>
      </div>
    </EditorialLayout>
  )
}
