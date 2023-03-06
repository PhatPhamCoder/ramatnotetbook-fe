import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Resetpassword = () => {
  return (
    <>
      <Meta title="Đặt lại mật khẩu" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h2 className="text-center">Đặt lại mật khẩu</h2>
              <form action="" className="d-flex flex-column gap-10">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu mới"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Nhập lại mật khẩu mới"
                />
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0">
                      Đặt lại mật khẩu
                    </button>
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

export default Resetpassword;
