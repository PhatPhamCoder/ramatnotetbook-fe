import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const Login = () => {
    return (
        <>
            <Meta title="Đăng nhập" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h2 className="text-center">Đăng kí tài khoản</h2>
                            <form action="" className='d-flex flex-column gap-10'>
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                />
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Mật khẩu'
                                />
                                <div>
                                    <Link to="/forgot-password">
                                        Forgot password?
                                    </Link>
                                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                        <button className='button border-0' type='submit'>Đăng nhập</button>
                                        <Link to="/signup" className='button signup'>Đăng ký</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Login