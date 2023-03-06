import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
  return (
    <>
      <Meta title="Lấy lại mật khẩu" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h2 className="text-center mb-3">Đặt lại mật khẩu</h2>
              <p className="mt-2 mb-3 text-center sub-title">
                Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn
              </p>
              <form action="" className="d-flex flex-column gap-10">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center flex-column mt-2">
                    <button className="button border-0" type="submit">
                      Gửi email
                    </button>
                    <Link to="/login">Hủy</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
