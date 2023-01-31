import React, { Component } from 'react';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
class Contact extends Component {
    render() {
        return (
            <>
                <Meta title="Contact" />
                <BreakCrumb title="Contact" />
                <div className="contact-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3854761646685!2d106.66636222782796!3d10.78175973748777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed731a21d3b%3A0x49f135b1f4e91518!2zNzkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu51uZyAxMywgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1675175821609!5m2!1sen!2s"
                                    width="600"
                                    height="450"
                                    className='border-0 w-100 rounded-3'
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="contact-inner-wrapper d-flex justify-content-between">
                                    <div>
                                        <h3 className="contact-title mb-4">Liên hệ</h3>
                                        <form action="" className="d-flex flex-column gap-15">
                                            <div>
                                                <input type="text" className="form-control" placeholder="Tên" />
                                            </div>
                                            <div>
                                                <input type="email" className="form-control" placeholder="Địa chỉ Email" />
                                            </div>
                                            <div>
                                                <input type="number" className="form-control" placeholder="Số điện thoại" />
                                            </div>
                                            <div>
                                                <textarea
                                                    name=""
                                                    placeholder="Lời nhắn"
                                                    id=""
                                                    className="ư-100 form-control"
                                                    cols="30"
                                                    row="4"
                                                ></textarea>
                                            </div>
                                            <div className="button border-0">Gửi liên hệ</div>
                                        </form>
                                    </div>
                                    <div>
                                        <h3 className="contact-title mb-4">Thông tin chúng tôi</h3>
                                        <div>
                                            <ul className="ps-0">
                                                <li className="mb-3 d-flex align-items-center gap-15">
                                                    <AiOutlineHome className="fs-4" />
                                                    <address className="mb-0">
                                                        79/10 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh
                                                    </address>
                                                </li>
                                                <li className="mb-3 d-flex align-items-center gap-15">
                                                    <BiPhoneCall className="fs-4" />
                                                    <a href="tel:+840777077293">(+84) 777 077 293</a>

                                                </li>
                                                <li className="mb-3 d-flex align-items-center gap-15">
                                                    <AiOutlineMail className="fs-4" />
                                                    <a href="mailto:cskh@ramatnotebook.com">cskh@ramatnotebook.com</a>
                                                </li>
                                                <li className="mb-3 d-flex align-items-center gap-15">
                                                    <AiOutlineInfoCircle className="fs-4" />
                                                    <p className='mb-0'>Thứ 2 - Thứ 6 Từ 09:00 - 17:00</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </>
        );
    }
}

export default Contact;