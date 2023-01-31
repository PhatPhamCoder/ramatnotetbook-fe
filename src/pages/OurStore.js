import React, { useState } from 'react';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
import { BsFilterCircle } from "react-icons/bs";
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title="Our Store" />
            <BreakCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Sổ tay lò xo</li>
                                        <li>Album Dán Ảnh</li>
                                        <li>Sticker Dán</li>
                                        <li>Quà tặng Handmade</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Lọc <BsFilterCircle /></h3>
                                <div>
                                    <h5 className="sub-title">Trạng thái</h5>
                                    <div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">
                                                Còn hàng
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" checked />
                                            <label className="form-check-label">
                                                Hết hàng
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Giá</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div class="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="Form" />
                                            <label for="floatingInput">Form</label>
                                        </div>
                                        <div class="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="to" />
                                            <label for="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Màu sắc</h5>
                                    <div className='d-flex flex-wrap'>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Kích thước</h5>
                                    <div className='form-check'>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            A4(2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value=""
                                            id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            A5(2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Thẻ sản phẩm</h3>
                                <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        NoteBook
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Sổ tay
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Sổ lò xo
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Quà tặng
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Handmade
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Ghi chú
                                    </span>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Sản phẩm đề xuất</h3>
                                <div>
                                    <div className="random-products d-flex mb-3 gap-10">
                                        <div className="w-50">
                                            <img src="images/book-02.png" className="img-fluid rounded-3" alt="" />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={4}
                                                edit={true}
                                            />
                                            <p className="price"><b>đ100.000</b></p>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex gap-10">
                                        <div className="w-50">
                                            <img src="images/book-02.png" className="img-fluid rounded-3" alt="" />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={4}
                                                edit={true}
                                            />
                                            <p className="price"><b>đ100.000</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-itesm-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "180px" }} s>Sắp xếp theo:</p>
                                        <select
                                            name=""
                                            className="form-control form-select"
                                            id=""
                                        >
                                            <option value="">Loại giấy</option>
                                            <option value="">Giá Thấp đến Cao </option>
                                            <option value="">Giá Cao đến Thấp </option>
                                            <option value="">Mới nhất</option>
                                            <option value="">Bán chạy</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 Sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => { setGrid(3) }} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(4) }} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(6) }} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(12) }} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore