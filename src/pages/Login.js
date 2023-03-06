import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = object({
  email: string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Email không được để trống"),
  password: string().required("Mật khẩu không được để trống"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      <Meta title="Đăng nhập" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h2 className="text-center">Đăng nhập</h2>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-10"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to="/forgot-password">Quên mật khẩu?</Link>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0" type="submit">
                      Đăng nhập
                    </button>
                    <Link to="/signup" className="button signup">
                      Đăng ký
                    </Link>
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

export default Login;
