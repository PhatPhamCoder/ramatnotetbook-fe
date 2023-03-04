import React from "react";
import Meta from "../components/Meta";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";
import Carousel from "react-bootstrap/Carousel";
import Banner from "../images/banner.png";
import Banner2 from "../images/banner-2.png";
import Banner3 from "../images/banner-3.png";
const Home = () => {
  return (
    <>
      <Meta title="Ramat Note Book" />
      <div class="home-wrapper-1">
        <div className="carousel-wrapper">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid rounded"
                src={Banner}
                alt="banner-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid rounded"
                src={Banner2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid rounded"
                src={Banner3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Container class1="featured-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12 pb-4">
            <h3 className="section-heading text-center py-2 mb-0 title_lines">
              Sản phẩm nổi bật
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="collection-warpper py-4 home-wrapper-1">
        <div className="col-12 pb-4">
          <h3 className="section-heading text-center title_lines">
            Bộ sưu tập
          </h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <div className="colection-card text-center">
              <h5 className="text-dark">Sổ tay quà tặng</h5>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <div className="colection-card text-center">
              <h5 className="text-dark">Sổ tay thiết kế</h5>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <div className="colection-card text-center">
              <h5 className="text-dark">Handmade</h5>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <div className="colection-card text-center">
              <h5 className="text-dark">
                Quà tặng <br />
                Doanh nghiệp
              </h5>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-1 pb-4">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12 pb-4">
            <h3 className="section-heading text-center title_lines">
              Our Stories
            </h3>
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-4">
        <div className="row">
          <div className="col-12 pb-4">
            <h3 className="section-heading text-center title_lines">
              Khách hàng
            </h3>
          </div>
          <div className="col-12">
            <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
