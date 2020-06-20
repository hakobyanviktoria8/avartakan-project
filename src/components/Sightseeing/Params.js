import React,{useState,useEffect} from "react";
import "./Params.css";

export function Params1(props) {
    const [itemID, setItemID] = useState(props.match.params.itemID);
    const [itemData, setItemData] = useState([]);
    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch("https://am-places.herokuapp.com/church");
            if(response.ok){
                let dataArr = await response.json();
                setItemData(dataArr);
            } else{
                alert("Error " + response.status)
            }
        };
        fetchData();
    },[]);

    console.log(itemData);
    console.log(itemID);
    const  selectedItem = itemData.find(item => item.key === itemID);
    return (
        <div className={"params"}>
            <h1>Hello </h1>
            {console.log(selectedItem)}
            {/*{console.log(selectedItem.key)}*/}
        </div>
    )
}


