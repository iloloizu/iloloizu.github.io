import React from 'react';
import allBlogs from "../components/allBlogs";

function BlogsPage() {
    return (
        <div className="section">
            <h2 className="section-title">All Blogs</h2>
            <div className="BlogsPage section-content">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer">
                                  <img src={blog.image} alt="Ilolo Izu Blog"/>
                                    {blog.title} 
                                </a> <br /> {blog.month} {blog.date}, {blog.year}
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;