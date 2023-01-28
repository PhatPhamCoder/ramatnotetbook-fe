import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className="col-3">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link to='/'>
                        <img src="images/wish.svg" alt="" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/book-01.png" className='img-fluid' alt="Product Image" />
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
                        value={3}
                        edit={true}
                    />
                    <p className="price">đ100.000</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <Link to="/">
                            <img src="images/prodcompare.svg" alt="addcart" />
                        </Link>
                        <Link to="/">
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link to="/">
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard