import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__content"
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>

            </div>
            <div class="footer__bottom">
                <div class="grid wide">
                    <p class="footer__text">© 2021 - Bản quyền thuộc về nhóm DUE</p>
                    <p class="name">Tổng công ty Laptop House </p>
                    <p>  Hotline: 18007878  </p>
                    <p>Email: laptophouse@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;