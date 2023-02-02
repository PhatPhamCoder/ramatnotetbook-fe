import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Signup = () => {
    return (
        <>
            <Meta title="Tạo tài khoản" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h2 className="text-center">Tạo tài khoản</h2>
                            <form action="" className='d-flex flex-column gap-10'>
                                <CustomInput
                                    type="text"
                                    name='name'
                                    placeholder="Họ và tên"
                                />
                                <CustomInput
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                />
                                <CustomInput
                                    type="number"
                                    name=''
                                    placeholder="Số điện thoại"
                                />
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Mật khẩu'
                                />
                                <div>
                                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                        <button className='button border-0'>Tạo tài khoản</button>
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

export default Signup