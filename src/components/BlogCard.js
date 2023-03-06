import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="Blog" />
      </div>
      <div className="blog-content">
        <p className="date">28 Jan, 2023</p>
        <h5 className="title">Nguồn cảm hứng viết nhật ký</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit
          accusamus eos harum, quos nulla consequuntur nobis illo,
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
