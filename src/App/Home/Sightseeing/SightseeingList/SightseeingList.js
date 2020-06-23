import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Church from "./Church";
import Museums from "./Museums";
import Culture from "./Culture";
import Popular from "./Popular";
import Festivals from "./Festivals";
import Parks from "./Parks";
import Lakes from "./Lakes";
import Mountains from "./Mountains";
import Waterfalls from "./Waterfalls";
import Extreme from "./Extreme";
import Restaurants from "./Restaurants";
import WineHouses from "./WineHouses";

 export  function SightseeingList(props) {
    return(
        <Row>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="church"><Church /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="museums"><Museums /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="culture"><Culture /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="culture"><Popular /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="parks"><Parks /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="lakes"><Lakes /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="mountains"><Mountains /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="waterfalls"><Waterfalls /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="extreme"><Extreme /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="festivals"><Festivals /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="restaurants"><Restaurants /></Link>
            </Col>
            <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                <Link to="winehouses"><WineHouses /></Link>
            </Col>
        </Row>
    )
}
