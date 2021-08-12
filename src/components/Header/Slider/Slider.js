import React from 'react';
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import './Slider.css';

function SlideArrow() {
    const fadeImages = [
        //Loại hàng ngon:
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/6/5/637269501975415139_mb-pro-13-2020-xam-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/1/12/637460443873515499_microsoft-surface-pro-7-1035g4-bac-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/12/637407982638531818_mba-2020-gray-1.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/3/637635860214879453_asus-zenbook-ux325-xam-dd.jpg",
        //Loại bình dân-chơi game:
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/5/637610886675406247_acer-nitro-gaming-an515-57-den-dd.jpg",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/9/637352595657145902_dell-g3500-den-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426925939369668_dell-vostro-v5402-xam-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/7/637612635561893293_msi-bravo-15-den-dd.jpg",
        // Loại giá rẻ:
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/10/637615055177059585_hp-340s-g7-xam-dd.jpg",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/14/637435424325064224_dell-inspiron-n5502a-bac-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/6/637402743639860924_asus-vivobook-flip-tm420-den-dd.png",
        // "https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/28/637630622747695901_hp-pavilion-15-eg-bac-dd.jpg",
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660577601142_F-C1_1200x300%20(5).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660488536998_F-C1_1200x300%20(7).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660519944038_F-C1_1200x300%20(8).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/25/637628469477697086_F-C1_1200x300.png',

    ];
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    {/* <h1 className="slide-text-image">Phân khúc Cao Cấp: Nhân viên văn phòng</h1> */}
                    <img src={fadeImages[0]} />
                    {/* <img src={fadeImages[1]} />
                    <img src={fadeImages[2]} />
                    <img src={fadeImages[3]} /> */}
                </div>
                <div className="each-fade">
                    {/* <h1 className="slide-text-image">Phân khúc dân chơi: Code là cơm, Game là phở</h1> */}
                    <img src={fadeImages[1]} />
                    {/* <img src={fadeImages[5]} />
                    <img src={fadeImages[6]} />
                    <img src={fadeImages[7]} /> */}
                </div>
                <div className="each-fade">
                    {/* <h1 className="slide-text-image">Giá rẻ bất ngờ, mua ngay kẻo hết</h1> */}
                    <img src={fadeImages[2]} />
                    {/* <img src={fadeImages[9]} />
                    <img src={fadeImages[10]} />
                    <img src={fadeImages[11]} /> */}
                </div>
                <div className="each-fade">
                    {/* <h1 className="slide-text-image">Giá rẻ bất ngờ, mua ngay kẻo hết</h1> */}
                    <img src={fadeImages[3]} />
                </div>
            </Fade>
        </div>
    )
}

export default SlideArrow;