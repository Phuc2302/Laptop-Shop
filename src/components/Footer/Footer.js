import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AppStore from '../img/Appstore.png';
import GGPlay from '../img/Ggplay.png';
import QRCode from '../img/QR_code.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content"
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                <div className="row">
                    <div className="col l-3 m-4 c-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Mail</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 m-4 c-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 m-4 c-6">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <FaFacebook className="footer-item__icon" />
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <FaInstagram className="footer-item__icon" />
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">
                                    <FaLinkedin className="footer-item__icon" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img src={QRCode} alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <a href="" className="footer__download-app-link">
                                    <img src={GGPlay} alt="Google play"
                                        className="footer__download-app-img" />
                                </a>
                                <a href="" className="footer__download-app-link">
                                    <img src={AppStore} alt="App store"
                                        className="footer__download-app-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid wide" style={{
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    <p className="footer__text">© 2021 - Bản quyền thuộc về DUE</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;