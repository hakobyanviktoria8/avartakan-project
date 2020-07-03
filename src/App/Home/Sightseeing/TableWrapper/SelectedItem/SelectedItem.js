import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import "./SelectedItem.css";
import {Item} from "./Item/Item";

export function SelectedItem(props) {
    let { section, name } = useParams();
    const [itemData, setItemData] = useState([]);

    useEffect(()=>{
        async function fetchItem() {
            try {
                const response = await fetch(`https://am-places.herokuapp.com/${section}?name=${name}`);
                const json = await response.json();
                setItemData(json);
            } catch (error) {
                alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
            }
        }
        fetchItem()
    },[]);

    return (
        <div className={"selectedItem"}>
            {
                itemData.map(item => {
                    return (
                        <div key={item.key}>
                            <Item {...item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}