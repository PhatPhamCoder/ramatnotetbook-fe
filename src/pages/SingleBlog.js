import React from 'react';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
import BlogCard from "../components/BlogCard";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamic Blog Name" />
            <BreakCrumb title="Dynamic Blog Name" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blog" className='d-flex align-items-center'>
                                    <BsArrowLeft /> Quay về trang trước
                                </Link>
                                <h3 className="title">Nguồn cảm hứng viết nên thương hiệu</h3>
                                <img src="/images/blog-1.jpg" className='img-fluid my-4 rounded-3' alt="Blog" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, dolores ratione quos accusantium, mollitia vitae quis aliquid quod laborum quo laudantium tenetur hic magnam, excepturi saepe qui minima iste asperiores!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog