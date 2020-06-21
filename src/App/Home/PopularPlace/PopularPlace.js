import React from "react";
import "./PopularPlace.css";
import CoverFlow from 'coverflow-react';

const imagesArr = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
];

export default function PopularPlace(props) {
    return(
        <div className={"popular"}>
            <h2 className={"title"}>Ամենահայտնի տեղերը</h2>
            <CoverFlow imagesArr={imagesArr} />
        </div>
    )
}