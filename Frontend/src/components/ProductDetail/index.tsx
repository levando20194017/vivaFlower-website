import "./style.scss";
import 'animate.css';
import { useSpring, animated } from '@react-spring/web'
import React, { useState, useEffect } from 'react'
import img1 from '../../assets/images/banner.jpg'
import img2 from '../../assets/images/content.jpg'
export const ProductDetail = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [img1, img2, img2, img2, img2];
  
    const handleClickLeft = () => {
      if (imageIndex > 0) {
        setImageIndex(imageIndex - 1);
      }
    };
  
    const handleClickRight = () => {
      if (imageIndex < images.length - 4) {
        setImageIndex(imageIndex + 1);
      }
    };
    return (
        <div className="pro-form">
            <div className="div-empty"></div>
            <div className="pro-header gap-xl-3">
                <div style={{fontWeight: "bold", fontSize: "30px"}}><i className="bi bi-house-fill"></i></div>
                <div className="vr"></div>
                <div className="text-secondary">VIVA FLOWER</div>
            </div>
            <div className="pro-body mt-4 container">
                <div className="d-flex">
                <div className="col-5 images-of-pro">
                <div className="img-show">
                    <img src={img2} />
                </div>
                <div className="list-img-of-pro mt-3 d-flex">
                    <div>
                    <i className="bi bi-caret-left-fill" onClick={handleClickLeft}></i>
                    </div>
                    <ul>
                    {images.slice(imageIndex, imageIndex + 4).map((image, index) => (
                        <li key={index}>
                        <img src={image} height={120} width={100} />
                        </li>
                    ))}
                    </ul>
                    <div>
                    <i className="bi bi-caret-right-fill" onClick={handleClickRight}></i>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-7 pro-detai"></div>
            </div>
            <div className=""></div>
        </div>
    )
}