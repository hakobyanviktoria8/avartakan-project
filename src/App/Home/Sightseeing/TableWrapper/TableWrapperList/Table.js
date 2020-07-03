import React, { useEffect, useState} from "react";
import "./Table.css";
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

export default function Table(props) {
    const [rowData,setRowData] = useState([]);

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch(props.url);
            if(response.ok){
                let dataArr = await response.json();
                setRowData(dataArr);
            } else{
                alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
            }
        };
        fetchData();
    },[]);

    return(
            <Container>
                {
                    rowData.map(item =>
                        <Row key={item.key}>
                            <Col xs="12" sm="12" md="4" lg="3" xl="3">
                                <Link  to={`${item.name}`}>
                                    <img className={"timg"} src={item.src} alt={item.altText}/>
                                </Link>
                                <p className="text-center">{item.caption}</p>
                            </Col>
                            <Col xs="12" sm="12" md="8" lg="9" xl="9">
                                <div className={"descr"}>
                                    <h4>{item.header}</h4>
                                    <p><b>{item.address}</b></p>
                                    <p>{item.description}</p>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            </Container>
    )
}