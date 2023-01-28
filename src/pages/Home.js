import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img
                                    src='images/main-banner-1.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main-banner' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>NoteBook</h4>
                                    <h5>Handmade</h5>
                                    <p>Contact for specific pricing</p>
                                    <Link to='/' end className='button'>See More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img
                                        src='images/catbanner-01.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Sổ lò xo</h4>
                                        <h5>Handmade</h5>
                                        <p>Contact for specific pricing</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src='images/catbanner-02.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Sổ lò xo</h4>
                                        <h5>Handmade</h5>
                                        <p>Contact for specific pricing</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src='images/catbanner-03.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Sổ lò xo</h4>
                                        <h5>Handmade</h5>
                                        <p>Contact for specific pricing</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main-banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Sổ lò xo</h4>
                                        <h5>Handmade</h5>
                                        <p>Contact for specific pricing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service.png' alt='services' />
                                    <div>
                                        <h6 className='fw-bold'>Free Shipping</h6>
                                        <p className='mb-0'>Miễn phí ship đơn hàng trên 500k</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-02.png' alt='services' />
                                    <div>
                                        <h6 className='fw-bold'>Siêu Sale mỗi ngày</h6>
                                        <p className='mb-0'>Tiết kiếm lên đến 30%</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-03.png' alt='services' />
                                    <div>
                                        <h6 className='fw-bold'>Hỗ trợ 24/7</h6>
                                        <p className='mb-0'>Liên hệ qua hotline</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-04.png' alt='services' />
                                    <div>
                                        <h6 className='fw-bold'>Chiết khấu</h6>
                                        <p className='mb-0'>Nhận giá tốt nếu đặt số lượng nhiều</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-05.png' alt='services' />
                                    <div>
                                        <h6 className='fw-bold'>Phương thức thanh toán</h6>
                                        <p className='mb-0'>Được bảo mật 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Sổ lò xo</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-1.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>NoteBook</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-2.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Phụ kiện trang trí</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-3.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Bookmarks</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-4.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Sổ lò xo</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-1.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>NoteBook</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-2.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Phụ kiện trang trí</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-3.png" alt="camera" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Bookmarks</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="images/categories-4.png" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-01.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-02.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-03.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-04.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-05.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-06.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="images/brand-07.png" alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Feauture Collection
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Lastest Blogs
                            </h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home