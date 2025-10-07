import React from 'react'
import allBlogs from '../components/allBlogs'

export default function Blogs() {
  const preview = allBlogs.slice(0, 4)
  return (
    <section id="blogs" className="section writing">
      <h2 className="section-title">Blogs</h2>
      <div className="section-content">
        <div className="BlogsPage">
          {preview.map((blog) => (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer">
                  <img src={blog.image} alt="Blog"/>
                  {blog.title}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-row" style={{marginTop: '16px'}}>
          <a className="btn" href="#/blogs">View all blogs</a>
        </div>
      </div>
    </section>
  )
}


