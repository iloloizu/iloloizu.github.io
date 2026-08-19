import React from 'react'
import EditorialLayout from '../layout/EditorialLayout'
import allVideos from '../components/allVideos'
import EdBack from '../components/EdBack'

function VideosPage() {
  return (
    <EditorialLayout>
      <EdBack />
      <h2 className="ed-label">YouTube</h2>
      <h1 className="ed-page-title">Videos</h1>
      <p className="ed-page-intro">
        Vlogs and lessons from my software engineering journey, filmed along the way
        on <a href="https://www.youtube.com/@IloloIzu/videos" target="_blank" rel="noreferrer">YouTube</a>.
      </p>

      <div className="ed-rows">
        {allVideos.map((v) => (
          <a key={v.id} className="ed-row" href={v.link} target="_blank" rel="noreferrer">
            <div className="ed-tile ed-tile--thumb" aria-hidden="true">
              <img src={v.thumbnail} alt="" loading="lazy" />
            </div>
            <div className="ed-row-body">
              <div className="ed-row-title">{v.title}</div>
            </div>
            <div className="ed-row-date">{v.month} {v.year}</div>
          </a>
        ))}
      </div>
    </EditorialLayout>
  )
}

export default VideosPage
