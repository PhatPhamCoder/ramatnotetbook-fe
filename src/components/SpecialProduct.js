import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex">
          <div className="mx-3">
            <img src="images/book-02.png" className="img-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">NoteBook</h5>
            <h6 className="title">
              Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
            </h6>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4}
              edit={true}
            />
            <p className="price">
              <span className="red-p">đ80.000</span> &nbsp;{" "}
              <strike>đ100.000</strike>
            </p>
            <div className="discount-bill d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> Ngày
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Số lượng: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="/" className="button">
              Thêm vào giỏ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
