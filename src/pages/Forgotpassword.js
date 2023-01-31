import React from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
    return (
        <>
            <Meta title="Lấy lại mật khẩu" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h2 className="text-center mb-3">Đặt lại mật khẩu</h2>
                                <p className='mt-2 mb-3 text-center sub-title'>
                                    Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn
                                </p>
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
                                        <div className="d-flex justify-content-center gap-15 align-items-center flex-column mt-2">
                                            <button className='button border-0' type='submit'>Gửi email</button>
                                            <Link to="/login">Hủy</Link>
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

export default Forgotpassword