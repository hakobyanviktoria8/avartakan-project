import React from "react";
import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./sightseeing.css";
import Church from "./Church";
import Lakes from "./Lakes";
import Restaurants from "./Restaurants";
import Mountains from "./Mountains";
import Museums from "./Museums";
import Waterfalls from "./Waterfalls";
import Festivals from "./Festivals";
import Parks from "./Parks";
import Culture from "./Culture";
import WineHouses from "./WineHouses";
import Extreme from "./Extreme";

export default function Sightseeing(props) {
    return(
        <div className={"sightseeing"}>
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className={"title"}>Բացահայտենք Հայաստանը միասին</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/church`}><Church /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/museums`}><Museums /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/culture`}><Culture /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/festivals`}><Festivals /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/parks`}><Parks /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/lakes`}><Lakes /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/mountains`}><Mountains /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/waterfalls`}><Waterfalls /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/extreme`}><Extreme /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/restaurants`}><Restaurants /></Link>
                    </Col>
                    <Col xs="10" sm="6" md="5" lg="4" xl="3" className={"card1"}>
                        <Link to={`sightseeing/winehouses`}><WineHouses /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}