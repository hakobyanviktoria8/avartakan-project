import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render(){
        return(
            <Carousel>
                <div>
                    <img src='https://cnet1.cbsistatic.com/img/-B3kmqxu8sB6pYlTVZqRF9_cJB0=/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'/>
                    <p className="legend">Legend1</p>
                </div>
                <div>
                    <img  src='https://s22246.pcdn.co/wp-content/uploads/2019/11/0-Mauritius-Beachcomber-treux-au-biches-11-1024x683.jpg'/>
                    <p className="legend">Legend2</p>
                </div>
                <div>
                    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSam8XubwX6cQtp_Otw1MB1u73Ikkejqg84UzxLs9QSKyWFW4sOnjSHBJwP&usqp=CAU&ec=45668930'/>
                    <p className="legend">Legend3</p>
                </div>
            </Carousel>
        );
    }
}

export default Slider;