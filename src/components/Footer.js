import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube, BsTelegram } from 'react-icons/bs'
const Footer = () => {
    return (
        <>
            <footer className='py-2'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src='/images/newsletter.png' alt='newsletter' />
                                <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group p-2">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder='Your Email Here'
                                    aria-label='Search Product Here'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-2' id="basic-addon2">
                                    Subcribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-7'>
                                    HCMC: 79 Tô Hiến Thành, Quận 10
                                </address>
                                <a href='tel:+84777077293' className='mt-4 d-block mb-3 text-white'>
                                    (+84) 777 077 293
                                </a>
                                <a href='mailto:cskh@ramatnotebook.com' className='mt-4 d-block mb-3 text-white'>
                                    cskh@ramatnotebook.com
                                </a>
                                <div className="social-icon d-flex align-items-center gap-30 mt-4">
                                    <a href="" className='text-white'>
                                        <BsFacebook className='fs-4' />
                                    </a>
                                    <a href="" className='text-white'>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a href="" className='text-white'>
                                        <BsTelegram className='fs-4' />
                                    </a>
                                    <a href="" className='text-white'>
                                        <BsYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to="/" end className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Acoount</h4>
                            <div className='footer-account d-flex flex-column'>
                                <Link to="/" end className='text-white py-2 mb-1'>About Us</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Faq</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to="/" end className='text-white py-2 mb-1'>NoteBook</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Pen</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Accessories</Link>
                                <Link to="/" end className='text-white py-2 mb-1'>Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered By Ptech</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer