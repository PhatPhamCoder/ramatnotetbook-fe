import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import Wishlist from '../images/wishlist.svg';
import book02 from "../images/book-02.png";
import book01 from "../images/book-01.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="product-card position-relative my-2">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wish" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={book01} className='img-fluid' alt="Product Image" />
                        <img src={book02} className='img-fluid' alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h6 className='type'>Sổ Note</h6>
                        <h5 className='product-title'>
                            Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={4}
                            edit={true}
                        />
                        <p className={`desciption ${grid === 12 ? "d-block" : "d-none"}`}>
                            Ghi chú sản phẩm ở đây nè bé Nhi ^^
                        </p>
                        <p className="price">đ100.000</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="addcart" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div >
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="product-card position-relative my-2">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wish" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={book01} className='img-fluid' alt="Product Image" />
                        <img src={book02} className='img-fluid' alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h6 className='type'>Sổ Note</h6>
                        <h5 className='product-title'>
                            Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={4}
                            edit={true}
                        />
                        <p className={`desciption ${grid === 12 ? "d-block" : "d-none"}`}>
                            Ghi chú sản phẩm ở đây nè bé Nhi ^^
                        </p>
                        <p className="price">đ100.000</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="addcart" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div >
        </>
    )
}

export default ProductCard