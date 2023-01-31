import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
const Login = () => {
    return (
        <>
            <Meta title="Đăng nhập" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h2 className="text-center">Đăng kí tài khoản</h2>
                                <form action="" className='d-flex flex-column gap-10'>
                                    <div>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name='password'
                                            placeholder='Mật khẩu'
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <Link to="/forgot-password">
                                            Forgot password?
                                        </Link>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className='button border-0'>Đăng nhập</button>
                                            <Link to="/signup" className='button signup'>Đăng ký</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login