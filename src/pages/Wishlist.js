import React from "react";
import BreakCrumb from "../components/BreakCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreakCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <div className="wishlist-icon position-absolute">
                <image
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
              </div>
              <div className="wishlist-card-image">
                <image
                  src="images/book-01.png"
                  className="img-fluid w-100"
                  alt="Wishlist Image"
                />
              </div>
              <div className="wishlist-details py-2 px-2">
                <h5 className="wishlist-title">
                  Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
                </h5>
                <p className="price">đ100.000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <div className="wishlist-icon position-absolute">
                <image
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
              </div>
              <div className="wishlist-card-image">
                <image
                  src="images/book-01.png"
                  className="img-fluid w-100"
                  alt="Wishlist Image"
                />
              </div>
              <div className="wishlist-details py-2 px-2">
                <h5 className="wishlist-title">
                  Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
                </h5>
                <p className="price">đ100.000</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <div className="wishlist-icon position-absolute">
                <image
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt=""
                />
              </div>
              <div className="wishlist-card-image">
                <image
                  src="images/book-01.png"
                  className="img-fluid w-100"
                  alt="Wishlist Image"
                />
              </div>
              <div className="wishlist-details py-2 px-2">
                <h5 className="wishlist-title">
                  Sổ Ghi Chép Note Nhạc Sheet Nhạc Size A5 bằng tập học sinh
                </h5>
                <p className="price">đ100.000</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
