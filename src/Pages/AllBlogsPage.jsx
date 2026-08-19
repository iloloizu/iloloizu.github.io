import React from 'react'
import EditorialLayout from '../layout/EditorialLayout'
import allBlogs from '../components/allBlogs'
import EdBack from '../components/EdBack'

function AllBlogsPage() {
  return (
    <EditorialLayout>
      <EdBack />
      <h2 className="ed-label">All Writing</h2>
      <h1 className="ed-page-title">Blogs</h1>
      <p className="ed-page-intro">
        Thoughts, tutorials, and insights on software development, technology trends,
        and career growth, published on Medium.
      </p>

      <div className="ed-rows">
        {allBlogs.map((blog) => (
          <a key={blog.id} className="ed-row" href={blog.link} target="_blank" rel="noreferrer">
            <div className="ed-tile ed-tile--cover" aria-hidden="true">
              <img src={blog.image} alt="" loading="lazy" />
            </div>
            <div className="ed-row-body">
              <div className="ed-row-title">{blog.title}</div>
            </div>
            <div className="ed-row-date">{blog.month} {blog.year}</div>
          </a>
        ))}
      </div>
    </EditorialLayout>
  )
}

export default AllBlogsPage
