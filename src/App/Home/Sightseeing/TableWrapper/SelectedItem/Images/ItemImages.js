import React from "react";
import "./itemImages.css";
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useParams, Link } from 'react-router-dom';
import iconSite from "../icon/internet.png";
import iconFacebook from "../icon/facebook.png";
import {Images} from "./Images";

export function ItemImages(props) {
    let { section, key } = useParams();
    return(
        <Container>
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"item"}>
                    <h2>{props.header}</h2>
                    <h6>{props.caption}</h6>
                    <p>{props.description}</p>
                    {console.log(props)}
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"item"}>
                    <Nav className="mr-auto">
                        <NavItem>
                            <Link to="/">Նկարներ</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="contacts">Տվյալներ</Link>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <NavLink href={props.site[0]}><img src={iconSite} alt=""/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={props.site[1]}><img src={iconFacebook} alt=""/></NavLink>
                        </NavItem>
                    </Nav>
                    <hr/>
                    <Images/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465883.9503245908!2d44.2339345592861!3d39.90500233930472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aca1c0c3d6bc3%3A0xfbfcc202cc1fcfbc!2sHnaberd%2C+Armenia!5e0!3m2!1sen!2s!4v1525446123836"
                        width="100%" height="600" frameBorder="0" style={{border:"0"}} allowFullScreen="">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}