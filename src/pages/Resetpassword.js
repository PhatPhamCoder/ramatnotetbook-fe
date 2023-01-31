import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Resetpassword = () => {
    return (
        <>
            <Meta title="Tạo tài khoản" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h2 className="text-center">Đặt lại mật khẩu</h2>
                                <form action="" className='d-flex flex-column gap-10'>
                                    <div>
                                        <input
                                            type="password"
                                            name='password'
                                            placeholder='Mật khẩu mới'
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name='password'
                                            placeholder='Nhập lại mật khẩu mới'
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className='button border-0'>Đặt lại mật khẩu</button>
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

export default Resetpassword