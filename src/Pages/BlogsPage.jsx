import React from 'react';
import Title from '../components/Title';
import allBlogs from "../components/allBlogs";

function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <a href={blog.link} className="blog-link">
                                  <img src={blog.image} alt="blog-image"/>
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