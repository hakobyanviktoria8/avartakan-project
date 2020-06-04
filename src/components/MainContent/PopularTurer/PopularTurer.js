import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Border from "../TesarjanVayrer/Border";


export default function PopularTurer(props) {
    return(
        <>
            <Container className={"tesarjanVayrer"}>
                <Row>
                    <Col xs="12">
                        <h2 className={"vernagrer"}>Ամենահայտնի տեղերը</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <Border>
                            <h3>1Tex</h3>
                        </Border>
                    </Col>
                </Row>
            </Container>
        </>
    )
}