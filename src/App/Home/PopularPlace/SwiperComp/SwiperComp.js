import React,{ useEffect, useRef } from 'react';
import 'swiper/css/swiper.min.css';
import "./SwiperComp.css";
import Swiper from 'swiper';

const SwiperComp = (props)=>{
    const swiper = useRef(null);
    const categoryData = props.itemData;
    console.log(categoryData);
    useEffect(()=>{
        swiper.current = new Swiper('.swiper-container',{
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    },[]);
    console.log(props.itemData);
    return (
        <div className="AppSwiper">
            <div className="swiperMainContainer">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {categoryData.map((item,key) => (
                            <div className="swiper-slide" key={key}>
                                <div className="imgCardHolder">
                                    <img src={item.src} alt="images"/>
                                </div>
                                <h5>{item.header}</h5>
                                <small>{item.caption}</small>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"> </div>
                    <div className="swiper-button-prev"> </div>
                    <div className="swiper-button-next"> </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperComp;