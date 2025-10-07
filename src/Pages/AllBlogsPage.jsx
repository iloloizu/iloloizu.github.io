import React from 'react';
import { Link } from 'react-router-dom';
import allBlogs from '../components/allBlogs';

function AllBlogsPage() {
  return (
    <div className="all-blogs-page">
      <div className="all-blogs-header">
        <Link to="/" className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
        
        <h1 className="all-blogs-title">All Blogs</h1>
        <p className="all-blogs-subtitle">
          A collection of my thoughts, tutorials, and insights on software development, 
          technology trends, and career growth in the tech industry.
        </p>
      </div>

      <div className="all-blogs-content">
        <div className="blogs-grid">
          {allBlogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-card-content">
                <div className="blog-date">
                  {blog.month} {blog.date}, {blog.year}
                </div>
                <h3 className="blog-title">
                  <a 
                    href={blog.link} 
                    className="blog-link" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {blog.title}
                  </a>
                </h3>
                <div className="blog-actions">
                  <a 
                    href={blog.link} 
                    className="read-more-btn" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBlogsPage;