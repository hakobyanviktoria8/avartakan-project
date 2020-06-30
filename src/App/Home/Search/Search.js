import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from "react-router-dom";
import "./Search.css";
import ciran from "./img/ciran.png";
import duduk from "./img/duduk.png";
import kamancha from "./img/kamancha.png";
import nur3 from "./img/nur3.png";
import gorg from "./img/gorg.png";
import {Item} from "../Sightseeing/TableWrapper/SelectedItem/Item/Item";


export function Search(props) {
    const [valueSection, setValueSection] = useState("church");
    const [valueName, setValueName] = useState("");
    const [options,setOptions] = useState([]);
    const [show, setShow] = useState(false);
    let location = useLocation();
    // let history = useHistory();

    const handleChange = (event) => {
        setValueSection(event.target.value);
        fetch(`https://am-places.herokuapp.com/${event.target.value}`)
            .then(response => response.json())
            .then(response => setOptions(response))
    };
    const handleChangeName =(event)=>{
        setValueName(event.target.value);
    };
    console.log(valueSection);
    console.log(options);
    console.log(valueName);
    console.log(location);
    // console.log(history);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true);

    };
    return(
        <div className={"search"}>
            <h2 className={"title"}>Որոնել</h2>
            <Container>
                <Row className={"mx-auto"}>
                    <Col xs="2" sm="2" md="2" lg="2" xl="2"> </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <form >
                            <label>
                                <span>Բնագավառ</span>
                                <select className={"dropdown"}  value={valueSection} onChange={handleChange}>
                                    <option value="church">Եկեղեցիներ</option>
                                    <option value="museums">Թանգարաններ</option>
                                    <option value="culture">Մշակույթ</option>
                                    <option value="festivals">Փառատոներ</option>
                                    <option value="parks">Այգիներ</option>
                                    <option value="lakes">Լճեր</option>
                                    <option value="mountains">Լեռնաշխարհ</option>
                                    <option value="waterfalls">Ջրվեժներ</option>
                                    <option value="extreme">Էքստրիմ</option>
                                    <option value="popular">Ամենահայտնի</option>
                                    <option value="restaurants">Ռեստորաններ</option>
                                    <option value="winehouses">Գինետներ</option>
                                </select>
                            </label>
                        </form>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Գտնված տվյալներ</span>
                                <select className={"dropdown"} value={valueName} onChange={handleChangeName}>
                                    {
                                        options.map(item =>
                                            <option key={item.key} value={item.name}>{item.header}</option>
                                        )
                                    }
                                </select>
                            </label>
                            <input type="submit" value="Փնտրել" />
                            {show &&
                            <Item section= {valueSection} name={valueName} />}
                        </form>
                    </Col>
                </Row>
            </Container>
            <img className={"ciran"} src={ciran} alt=""/>
            <img className={"duduk"} src={duduk} alt=""/>
            <img className={"kamancha"} src={kamancha} alt=""/>
            <img className={"gorg"} src={gorg} alt=""/>
            <img className={"nur3"} src={nur3} alt=""/>
        </div>
    )
}
