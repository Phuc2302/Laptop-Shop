import React from 'react';
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import './Slider.css';

function SlideArrow() {
    const fadeImages = [
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660577601142_F-C1_1200x300%20(5).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660488536998_F-C1_1200x300%20(7).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633660519944038_F-C1_1200x300%20(8).png',
        'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/25/637628469477697086_F-C1_1200x300.png',
    ];
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">               
                    <img src={fadeImages[0]} />                
                </div>
                <div className="each-fade">    
                    <img src={fadeImages[1]} />           
                </div>
                <div className="each-fade">            
                    <img src={fadeImages[2]} />     
                </div>
                <div className="each-fade">
      
                    <img src={fadeImages[3]} />
                </div>
            </Fade>
        </div>
    )
}

export default SlideArrow;