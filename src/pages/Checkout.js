import React from 'react';
import { Link } from 'react-router-dom';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
import { BiArrowBack } from "react-icons/bi";
import book01 from "../images/book-01.png";
import book02 from "../images/book-02.png";
import Container from '../components/Container';
const Checkout = () => {
    return (
        <>
            <Meta title="Thanh toán" />
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Ramat Note Book</h3>
                                <nav
                                    style={{ "--bs-bradcrumb-divider": ">" }}
                                    aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item" aria-current="page">
                                            <Link className="text-dark" to="/cart">
                                                Giỏ hàng
                                            </Link>
                                        </li>
                                        &nbsp;
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Thông tin đặt hàng
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Giao hàng
                                        </li>
                                        &nbsp;
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Thanh toán
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Thông tin đặt hàng</h4>
                                <p className="user-details">
                                    Matta Nguyễn (example@ramatnotebook.com)
                                </p>
                                <h4 className="mb-3">Địa chỉ giao hàng</h4>
                                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                    <div className="w-100">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>Tỉnh/Thành</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Họ và tên đệm" className="form-control" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Tên" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Địa chỉ" className="form-control" />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>Quận/Huyện</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>Phường/Xã</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="Mã zip" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="/cart" className="text-dark d-flex align-items-center gap-10">
                                                <BiArrowBack className='me-2' />Quay lại giỏ hàng
                                            </Link>
                                            <Link to="/cart" className="button">
                                                Tiếp tục thanh toán
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 justify-content-between">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                style={{ top: "-10px", right: "2px" }}
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                            >
                                                1
                                            </span>
                                            <img src={book01} className="img-fluid rounded-3" alt="" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">Sổ notebook nhỏ gọn</h5>
                                            <p className="total-price">A5 / SN012023</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <h5 className="total">đ100.000</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="total">Tạm tính</p>
                                        <p className="total-price">đ100.000</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0 total">Giao hàng</p>
                                        <p className="mb-0 total-price">đ30.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-4">
                                <h4 className="total text-bold">Tổng cộng</h4>
                                <h5 className="total-price">đ130.000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Checkout