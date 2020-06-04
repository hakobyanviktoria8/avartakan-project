import React from "react";
import Lcher from "./Lcher";
import Tangaranner from "./Tangaranner";
import Border from "./Border";
import Ekexeciner from "./Ekexeciner";
import { Container, Row, Col } from 'reactstrap';

export default function TesarjanVayrer(props) {
    return(
        <>
            <Container className={"tesarjanVayrer"}>
                <Row>
                    <Col xs="12">
                        <h2 className={"vernagrer"}>Հայաստանի տեսարժան վայրերը</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <Border>
                            <Ekexeciner />
                        </Border>
                    </Col>
                    <Col xs="4">
                        <Border>
                            <Lcher />
                        </Border>
                    </Col>
                    <Col xs="4">
                        <Border>
                            <Tangaranner />
                        </Border>
                    </Col>
                </Row>
            </Container>
        </>
    )
}