import React from 'react';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
import book01 from "../images/book-01.png";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Cart = () => {
    return (
        <>
            <Meta title="Giỏ hàng" />
            <BreakCrumb title="Giỏ hàng" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Tên sản phẩm</h4>
                                <h4 className="cart-col-2">Giá tiền</h4>
                                <h4 className="cart-col-3">Số lượng</h4>
                                <h4 className="cart-col-4">Thành tiền</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className='w-25 p-2'>
                                        <img
                                            src={book01}
                                            alt="product-name"
                                            className='img-fluid rounded-3'
                                        />
                                    </div>
                                    <div className='w-75'>
                                        <p>Sổ ghi chú dành cho dân văn phòng nhỏ gọn</p>
                                        <p>Kích thước: A5</p>
                                        <p>Loại giấy: Trắng</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">đ100.000</h5>
                                </div>
                                <div className="cart-col-3 gap-15 d-flex align-items-center">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="number"
                                            min={1}
                                            max={100}
                                            name=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className='fs-4 text-danger cursor-pointer' />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">đ100.000</h5>
                                </div>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className='w-25 p-2'>
                                        <img
                                            src={book01}
                                            alt="product-name"
                                            className='img-fluid rounded-3'
                                        />
                                    </div>
                                    <div className='w-75'>
                                        <p>Sổ ghi chú dành cho dân văn phòng nhỏ gọn</p>
                                        <p>Kích thước: A5</p>
                                        <p>Loại giấy: Trắng</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">đ100.000</h5>
                                </div>
                                <div className="cart-col-3 gap-15 d-flex align-items-center">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="number"
                                            min={1}
                                            max={100}
                                            name=""
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className='fs-4 text-danger cursor-pointer' />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">đ100.000</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2">
                            <div className="d-flex justify-content-between">
                                <Link to="/product" className='button'>Tiếp tục mua sắm</Link>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <h4>Tổng đơn hàng: đ2000.000</h4>
                                <p>Thuế và vận chuyển được tính khi thanh toán</p>
                                <Link to="/checkout" className="button">Thanh toán</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart