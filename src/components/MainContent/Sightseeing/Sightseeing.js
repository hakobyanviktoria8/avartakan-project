import React from "react";
import "./sightseeing.css";
import { Container, Row, Col } from 'reactstrap';
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

export default function Sightseeing(props) {
    return(
        <>
            <Container fluid className={"sightseeing"}>
                <Row>
                    <Col>
                        <h2 className={"title"}>Հայաստանի տեսարժան վայրերը</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Church />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Museums />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Culture />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Festivals />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Parks />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Lakes />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Mountains />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Waterfalls />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <Restaurants />
                    </Col>
                    <Col xs="10" sm="6" md="4" lg="4" xl="3" className={"card1"}>
                        <WineHouses />
                    </Col>
                </Row>
            </Container>
        </>
    )
}