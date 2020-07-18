import React,{ useEffect, useRef } from 'react';
import 'swiper/css/swiper.min.css';
import "./SwiperComp.css";
import Swiper from 'swiper';

const SwiperComp = (props)=>{
    const swiper = useRef(null);
    const categoryData = [0,1,2,3,4,5,6];
    let arrImg=[];
    let arrHeader=[];

    props.itemData.map(x=>{
        arrImg.push(x.src);
        arrHeader.push(x.header)
        }
    );

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

    return (
        <div className="AppSwiper">
            <div className="swiperMainContainer">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {categoryData.map((item,key) => {
                            return(
                                <div className="swiper-slide" key={key}>
                                    <div className="imgCardHolder">
                                        <img className={"swiperImg"}
                                             src={arrImg[item]} alt="images"/>
                                    </div>
                                    <h5>{arrHeader[item]}</h5>
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"> </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperComp;