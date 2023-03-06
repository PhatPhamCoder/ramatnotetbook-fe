import * as React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsFillMicFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logoHeader from "../images/logo-header.png";
const Header = () => {
  return (
    <>
      <header className="header-upper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <Link to="/" className="logo-header">
                <img
                  src={logoHeader}
                  alt="logo-header"
                  className="img-fluid py-1"
                />
              </Link>
            </div>
            <div className="col-7 row d-flex justify-content-end align-items-center">
              <div className="col-3 py-2">
                <div className="hotline d-flex gap-10 fw-bold">
                  Hotline:{" "}
                  <a href="tel:0345601839" className="text-dark">
                    0345601839
                  </a>
                </div>
              </div>
              <div className="col-5 py-2">
                <div className="input-group">
                  <span
                    className="input-group-text p-2 border-0 text-dark bg-white "
                    id="basic-addon2"
                  >
                    <BsSearch className="fs-6" />
                  </span>
                  <input
                    type="text"
                    className="form-control py-1 border-0"
                    placeholder="Tìm kiếm sản phẩm ?"
                    aria-label="Search Product Here"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text p-2 border-0 text-dark bg-white"
                    id="basic-addon3"
                  >
                    <BsFillMicFill className="fs-6" />
                  </span>
                </div>
              </div>
              <div className="col-3 py-2">
                <div className="d-flex align-items-center gap-15">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 position-relative"
                  >
                    <div>
                      <AiOutlineShoppingCart
                        className="fs-4 color-dark text-decoration-none"
                        style={{ color: "black" }}
                      />
                    </div>
                    <span
                      className="badge fw-bold position-absolute"
                      style={{
                        top: "-10px",
                        right: "-15px",
                        color: "black",
                      }}
                    >
                      10
                    </span>
                  </Link>
                  <a
                    href="https://www.instagram.com/ramat.notebook/"
                    className="text-dark"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/ramat.notebook"
                    className="text-dark"
                  >
                    <BsFacebook className="fs-4" />
                  </a>
                  <Link to="/login">
                    <FaUserCircle className="fs-4 text-dark" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-links">
                <ul className="nav col-12 d-flex align-items-center justify-content-center">
                  <li>
                    <Link
                      to="/"
                      className="nav-link link-secondary text-dark fw-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product"
                      className="nav-link link-dark text-dark fw-bold"
                    >
                      NoteBook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/handmade-gift"
                      className="nav-link link-dark text-dark fw-bold"
                    >
                      Handmade Gift
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="nav-link link-dark text-dark fw-bold"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="nav-link link-dark text-dark fw-bold"
                    >
                      Our Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
