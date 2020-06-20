import React,{useEffect,useState} from "react";
import "./Table.css";
import {Link} from "react-router-dom";

export default function Table(props) {
    const [rowData,setRowData] = useState([]);
    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch(props.url);
            if(response.ok){
                let dataArr = await response.json();
                setRowData(dataArr);
            } else{
                alert("Error " + response.status)
            }
        };
        fetchData();
    },[]);
    return(
        <div className={"table"}>
            {/*<h2 className={"title"}>Հայաստանն իր գեղեցկությամբ</h2>*/}
            <table>
                <tbody>
                {
                    rowData.map(item =>
                        <tr key={item.key}>
                            <td className={"imgTD"}>
                                <Link to={`/sightseeing/church/${item.key}`}>
                                    <img className={"tableImg"} src={item.src} alt={item.altText}/>
                                </Link>
                                <p>{item.caption}</p>
                            </td>
                            <td className={"descTD"}>
                                <h4>{item.header}</h4>
                                <p><b>{item.address}</b></p>
                                <p>{item.description}</p>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
                {/*avelacnel markaner@*/}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465883.9503245908!2d44.2339345592861!3d39.90500233930472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aca1c0c3d6bc3%3A0xfbfcc202cc1fcfbc!2sHnaberd%2C+Armenia!5e0!3m2!1sen!2s!4v1525446123836"
                width="100%" height="600" frameBorder="0" style={{border:"0"}} allowFullScreen="">
            </iframe>
        </div>
    )
}