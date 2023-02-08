import * as React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs"
import { BsFacebook, BsInstagram, BsFillMicFill } from 'react-icons/bs';
import logoHeader from "../images/logo-header.png";
const Header = () => {
    return (
        <>
            {/* <header className="header-top-strip py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>
                                Free Shipping Over in HCMC and in VietNam
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:
                                <a className='text-white' href='tel:+84777077293'>
                                    (+84) 777 077 293
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header> */}
            <header className="header-upper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-5">
                            <Link to="/" className='logo-header'>
                                <img src={logoHeader} alt="logo-header" className="img-fluid py-1" />
                            </Link>
                        </div>
                        <div className="col-7 row d-flex justify-content-end align-items-center">
                            <div className="col-3 py-2">
                                <div className="hotline d-flex gap-10 fw-bold">
                                    Hotline: <a href="tel:0345601839" className="text-dark">0345601839</a>
                                </div>
                            </div>
                            <div className="col-6 py-2">
                                <div className="input-group">
                                    <span className='input-group-text p-2 border-0 text-dark bg-white ' id="basic-addon2">
                                        <BsSearch className='fs-6' />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control py-1 border-0"
                                        placeholder='What are you looking for ?'
                                        aria-label='Search Product Here'
                                        aria-describedby='basic-addon2'
                                    />
                                    <span className='input-group-text p-2 border-0 text-dark bg-white' id="basic-addon3">
                                        <BsFillMicFill className='fs-6' />
                                    </span>
                                </div>
                            </div>
                            <div className="col-1 py-2">
                                <div className="d-flex align-items-center gap-15">
                                    <a href="https://www.instagram.com/ramat.notebook/" className='text-dark'>
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a href="https://www.facebook.com/ramat.notebook" className='text-dark'>
                                        <BsFacebook className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between gap-15">
                                <div>
                                    <Link to="" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/compare.svg" alt="compare"></img>
                                        <p className="mb-0">
                                            Customize <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/wishlist.svg" alt="wishlist"></img>
                                        <p className="mb-0">
                                            Favorite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/user.svg" alt="user"></img>
                                        <p className="mb-0">
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <img src="images/cart.svg" alt="cart"></img>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 2</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
            <header className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-links">
                                <ul class="nav col-12 d-flex align-items-center justify-content-center">
                                    <li>
                                        <Link to="/" class="nav-link link-secondary text-dark fw-bold">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/product" class="nav-link link-dark text-dark fw-bold">NoteBook</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="nav-link link-dark text-dark fw-bold">Handmade Gift</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="nav-link link-dark text-dark fw-bold">Accessories</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" class="nav-link link-dark text-dark fw-bold">Our Stories</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;