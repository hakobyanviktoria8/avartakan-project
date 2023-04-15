import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"

function Slider (props){

   return(
       <Carousel>
           {
               props.img.map(x=>
                   <div key={`${x}`} className={"sliderImgSize"}>
                       <img src={require(`${x}`)} alt="img"/>
                   </div>
               )
           }
       </Carousel>
   );
}

export default Slider;