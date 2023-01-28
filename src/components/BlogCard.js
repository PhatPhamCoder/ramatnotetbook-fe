import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid' alt="Blog" />
                </div>
                <div className="blog-content">
                    <p className='date'>28 Jan, 2023</p>
                    <h5 className="title">
                        Nguồn cảm hứng viết nhật ký
                    </h5>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit accusamus eos harum, quos nulla consequuntur nobis illo,
                    </p>
                    <Link to='/' end className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard