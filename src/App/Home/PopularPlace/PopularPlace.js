import React from "react";
import "./PopularPlace.css";
import MutipleSlidesPerView from './PopularTourCardSlider';

export default function PopularPlace(props) {
    return(
        <div className={"popular"}>
            <h2 className={"title"}>Ամենահայտնի տեղերը</h2>
            <MutipleSlidesPerView/>
        </div>
    )
}