import React from "react";
import { Container, Row, Col } from 'reactstrap';


export default function PopularPlace(props) {
    return(
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <h2 className={"title"}>Ամենահայտնի տեղերը</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465883.9503245908!2d44.2339345592861!3d39.90500233930472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aca1c0c3d6bc3%3A0xfbfcc202cc1fcfbc!2sHnaberd%2C+Armenia!5e0!3m2!1sen!2s!4v1525446123836"
                            width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen=""> </iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}