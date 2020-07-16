import React, { useState, useEffect } from "react";
import "./PopularPlace.css";
import SwiperComp from "./SwiperComp/SwiperComp";

export default function PopularPlace(props) {
    const [itemData, setItemData] = useState([]);

    useEffect(()=>{
        async function fetchItem() {
            try {
                const response = await fetch("https://am-places.herokuapp.com/popular");
                const json = await response.json();
                setItemData(json);
            } catch (error) {
                alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
            }
        }
        fetchItem()
    },[]);

    return(
        <div className={"popular"}>
            <h2 className={"title"}>Ամենահայտնի տեղերը</h2>
            <SwiperComp itemData={itemData}/>
        </div>
    )
}