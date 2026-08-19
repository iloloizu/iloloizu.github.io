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
      <h1 className="ed-page-title">Who wears the mask?</h1>

      <div className="ed-about">
        <img className="ed-headshot ed-headshot--about" src={headshot} alt="Ilolo Izu" />
        <div className="ed-about-body">
          <p>
            I lead AI product engineering at <a href="https://www.lawtrades.com/" target="_blank" rel="noreferrer">Lawtrades</a>,
            where we&rsquo;re building an agent-powered legal experience for one of the larger
            attorney marketplaces. Most of my days are spent figuring out where a model can
            take real weight off a slow process, getting it in front of people early, and
            staying open to what comes back; some of what we build sticks and some of it
            doesn&rsquo;t, and I&rsquo;ve come to appreciate both outcomes for what they teach
            us about the people we&rsquo;re building for.
          </p>
        </div>
      </div>

      <div className="ed-about-sections">
        <h3 className="ed-label">How I got here</h3>
        <p>
          I didn&rsquo;t start in software. I graduated from Texas A&amp;M in 2019 headed for
          physician assistant school, and I went; a semester at Texas Tech&rsquo;s program in
          Midland, Texas. I&rsquo;m grateful for that time, because it&rsquo;s where I noticed
          I kept getting pulled toward the systems around the care rather than the care
          itself, and that&rsquo;s not something I would&rsquo;ve learned from the outside
          looking in. So I made the turn, enrolled at Flatiron School, filled in the gaps
          with a lot of YouTube and a lot of late nights, and kept building projects until
          the projects turned into work.
        </p>
        <p>
          That road led me to <a href="https://ripplematch.com/" target="_blank" rel="noreferrer">RippleMatch</a>,
          then <a href="https://www.resilia.com/" target="_blank" rel="noreferrer">Resilia</a>,
          then <a href="https://investor.vanguard.com/" target="_blank" rel="noreferrer">Vanguard</a>.
          Somewhere in there I went to AfroTech, met a group of people who were generous with
          their time, and one of those conversations turned into a job; I&rsquo;ve never
          forgotten that, which is why I always try to make room for someone who&rsquo;s
          working to break into this industry. I started taking on consulting work on the
          side, and these days I&rsquo;m at Lawtrades during the day and working on my MBA at
          Rice at night.
        </p>

        <h3 className="ed-label">Where it started</h3>
        <p>
          I ran track and field at Texas A&amp;M; four-time All-American, Distinguished
          Letterman, and part of a 2018 relay that set an indoor world record. I&rsquo;m
          happily retired now, but that chapter shaped just about everything I carry into
          work (how I handle pressure, how I think about preparation, and how much I trust a
          group of people who are all pulling in the same direction). My coach used to end
          the day by telling us not to let the day get away, and that one has stayed with me
          longer than anything I picked up in a lecture hall.
        </p>

        <h3 className="ed-label">Away from the desk</h3>
        <p>
          I&rsquo;m still training (marathons, hyrox, and whatever else keeps me athletic), I
          shoot <Link to="/portfolio">photography</Link>, I travel as often as the calendar
          allows, and I cook for more people than my apartment can comfortably hold. Most of
          the best things in my life have come from being around good people—especially my fiancée, so I try to
          keep doing that.
        </p>
      </div>
    </EditorialLayout>
  )
}
