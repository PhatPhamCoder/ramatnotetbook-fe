import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs"

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-2">
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
            </header>
            <header className="header-upper py-2">
                <div className="container-xxl">
                    <div className="row align-item-center">
                        <div className="col-2">
                            <h5 className="py-3">
                                {/* <a className='text-white' href='#'>Ramat Note Book</a> */}
                                <Link to="/" className='text-white'>Ramat Note Book</Link>
                            </h5>
                        </div>
                        <div className="col-5">
                            <div className="input-group p-2">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder='Search Product Here'
                                    aria-label='Search Product Here'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-2' id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
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
                        </div>
                    </div>
                </div >
            </header >
            <header className="header-bottom py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <img src="images/menu.svg" alt="" />
                                        <span className="me-5 d-inline-block">Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15" >
                                        <NavLink to="/" end>Home</NavLink>
                                        <NavLink to="/product" end>Our Store</NavLink>
                                        <NavLink to="/blog" end>Blogs</NavLink>
                                        <NavLink to="/contact" end>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div>
            </header >
        </>
    );
}


export default Header;