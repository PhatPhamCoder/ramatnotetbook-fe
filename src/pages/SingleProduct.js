import React, { useState } from "react";
import BreakCrumb from "../components/BreakCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395",
  };
  const [orderedProduct] = useState(true);
  let copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Product Name" />
      <BreakCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  S??? Ghi Ch??p Note Nh???c Sheet Nh???c Size A5 b???ng t???p h???c sinh
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">??100.000</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={4}
                    edit={true}
                  />
                  <p className="mb-0 t-review">(2 ????nh gi??)</p>
                </div>
                <a href="#review" className="review-btn">
                  Vi???t ????nh gi??
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">M?? s???n ph???m:</h3>
                  <p className="product-data">SN012023</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Lo???i B??a:</h3>
                  <p className="product-data">B??a c???ng</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Kh??? gi???y:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      A4
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      A5
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      A3
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Lo???i Gi???y:</h3>
                  <p className="product-data">GFd</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Th???:</h3>
                  <p className="product-data">GFd</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tr???ng th??i:</h3>
                  <p className="product-data">C??n h??ng</p>
                </div>
                <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                  <h3 className="product-heading">S??? l?????ng:</h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      style={{ width: "50px" }}
                      min={1}
                      max={10}
                      className="form-control"
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-15 ms-6">
                    <button className="button border-0" type="submit">
                      Th??m v??o gi??? h??ng
                    </button>
                    <Link to="/signup" className="button">
                      Mua ngay
                    </Link>
                    <a
                      href="/wishlist"
                      className="wishlist d-flex align-items-center"
                    >
                      <AiOutlineHeart /> Danh s??ch ?????c
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Giao h??ng v?? tr??? h??ng</h3>
                  <p className="product-data">
                    Mi???n ph?? ship v?? ho??n tr??? h??ng v???i ????n h??ng c?? gi?? tr??? tr??n
                    500.000 <br />
                    Ch??ng t??i s??? giao ????n h??ng c???a b???n <b>t??? 5 - 7 ng??y</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Product Link</h3>
                  <a
                    href="/"
                    onClick={() => {
                      copyToClipboard(
                        "https://cf.shopee.vn/file/451df1a07e9eb2dac74070acf95f8395"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>
              <b>M?? t??? s???n ph???m</b>
            </h4>
            <div className="description-inner-wrapper">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, consequatur. Quos mollitia facere adipisci, vero nemo
                quaerat eaque aliquid vitae perspiciatis, dolor sapiente,
                voluptates veniam delectus ducimus error totam ea!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 id="review">
              <b>????nh gi?? s???n ph???m</b>
            </h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                      edit={true}
                    />
                    <p className="mb-0">2 ????nh gi??</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="/" className="text-dark text-decoration-underline">
                      Vi???t ????nh gi??
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>????nh gi?? c???a kh??ch h??ng</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="H??? v?? t??n"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="?????a ch??? Email"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="S??? ??i???n tho???i"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      placeholder="????nh gi??"
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      row="4"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">G???i ????nh gi??</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">
                      <b>PhatPham</b>
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                      edit={true}
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque distinctio recusandae delectus vel, eligendi,
                    deleniti doloribus voluptatum nam ducimus unde quaerat id
                    sunt totam facilis, officiis modi deserunt iure molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">S???n ph???m ph??? bi???n</h3>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
