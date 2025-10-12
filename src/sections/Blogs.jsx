import React from 'react'
import { Link } from 'react-router-dom'
import allBlogs from '../components/allBlogs'

export default function Blogs() {
  const preview = allBlogs.slice(0, 3)
  return (
    <section id="blogs" className="section blogs">
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
          <Link className="theme-toggle" to="/blogs">View all blogs</Link>
        </div>
      </div>
    </section>
  )
}


