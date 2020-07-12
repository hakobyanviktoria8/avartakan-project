import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
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
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setValueSection(event.target.value);
        fetch(`https://am-places.herokuapp.com/${event.target.value}`)
            .then(response => response.json())
            .then(response => setOptions(response));
        // options && setOptions("")
        // console.log(options)
    };

    const handleChangeName =(event)=>{
        setValueName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true);
    };

    useEffect(()=>{
        async function fetchItem() {
            try {
                const response = await fetch(`https://am-places.herokuapp.com/${valueSection}?name=${valueName}`);
                console.log(response);
                const json = await response.json();
                setItems(json);
            } catch (error) {
                alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
            }
        }
        fetchItem()
    },[valueName]);

    return(
        <div className={"search"}>
            <h2 className={"title"}>Որոնել</h2>
            <Container>
                <Row className={"selected2List"}>
                    <Col xs="0" sm="0" md="0" lg="0" xl="2"> </Col>
                    <Col xs="12" sm="10" md="6" lg="6" xl="4" className={"text-center"}>
                        <Label for="exampleSelect" >Բնագավառ</Label>
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6" xl="4" className={"text-center"}>
                        <Label for="exampleSelect" >Գտնված տվյալներ</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="0" sm="0" md="0" lg="0" xl="2"> </Col>
                    <Col xs="12" sm="10" md="6" lg="6" xl="4" className={"m-1"}>
                        <Form >
                            <FormGroup row>

                                    <Input className={"dropdown"}  value={valueSection} onChange={handleChange} type="select" name="select" id="exampleSelect">
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
                                    </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="5" xl="4" className={"m-1"}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup row>
                                <Input className={"dropdown"}  value={valueName} onChange={handleChangeName} type="select" name="select" id="exampleSelect">
                                    {
                                        options.map(item =>
                                            <option key={item.key} value={item.name}>{item.header}</option>
                                        )
                                    }
                                </Input>
                                <Col xs="6" sm="6" md="6" lg="6" xl="6"> </Col>
                                <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                    <Input type="submit" value="Փնտրել" className={"m-1"}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <div className={"searchItem"} >
                            {show &&
                                items.map( item =>
                                    <Item {...item} valueSection = {valueSection} name = {valueName}/>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className={"ciran"} src={ciran} alt=""/>
            <img style = {show ? {display:"none"} : {display:"block"}} className={"duduk "} src={duduk} alt=""/>
            <img style = {show ? {display:"none"} : {display:"block"}} className={"kamancha "} src={kamancha} alt=""/>
            <img style = {show ? {display:"none"} : {display:"block"}} className={"gorg"} src={gorg} alt=""/>
            <img className={"nur3"} src={nur3} alt=""/>
        </div>
    )
}
