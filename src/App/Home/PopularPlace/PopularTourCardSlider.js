import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './PopularPlace.css';

const MutipleSlidesPerView = (props) => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
    return (
      <Swiper {...params}>
          {
              props.itemData.map(item=>
                  <div key={item.key}>
                      <img className="img" src={item.src} alt=""/>
                      <h4 className="slideTitle">{item.header}</h4>
                      <p className="slideCaption">{item.caption}</p>
                  </div>
              )
          }
      </Swiper>
    )
};

export default MutipleSlidesPerView;
    