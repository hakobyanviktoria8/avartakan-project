import React from "react";
import {Outlet} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import "./sightseeing.css";

function Sightseeing(props) {
    return(
        <>
        <div className={"sightseeing"}>
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className={"title"}>Բացահայտենք Հայաստանը միասին</h2>
                    </Col>
                </Row>

                <Outlet/>

            </Container>
        </div>
        </>
    )
}

export default Sightseeing