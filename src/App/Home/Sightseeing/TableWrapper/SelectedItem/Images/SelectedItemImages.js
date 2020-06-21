import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import "./SelectedItemImages.css";
import {ItemImages} from "./ItemImages";

export function SelectedItemImages(props) {
    let { section, key } = useParams();
    const [itemData, setItemData] = useState([]);
    useEffect(()=>{
        async function fetchItem() {
            try {
                const response = await fetch(`https://am-places.herokuapp.com/${section}?key=${key}`);
                const json = await response.json();
                setItemData(json);
            } catch (error) {
                alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
            }
        }
        fetchItem()
    },[]);

    return (
        <div className={"SelectedItemImages"}>
            {
                itemData.map(item => {
                    return (
                        <div key={item.key}>
                            <ItemImages {...item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}