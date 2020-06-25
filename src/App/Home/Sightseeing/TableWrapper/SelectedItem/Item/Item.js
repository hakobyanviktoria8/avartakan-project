import React from "react";
import "./Item.css";
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import iconSite from "./icon/internet.png";
import iconFacebook from "./icon/facebook.png";
import iconAddress from "./icon/address.png";
import iconPhone from "./icon/phone.png";
import iconEmail from "./icon/email.png";
import iconWorkTime from "./icon/workTime.png";
import ModalComponent from "./ModalComponent";

export function Item(props) {
    let { section, name } = useParams();
    let source = `Images/${section}/${props.name}`;
    let imgArr = [1,2,3,4,5,6,7,8,9,10,11,12];

    const sliderImg=[];
    imgArr.map(x=>
        sliderImg.push(`./${source}/${x}.jpg`)
    );
    console.log(sliderImg);
    
    return(
        <Container>
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"item"}>
                    {/*<img src={require("./Images/church/Mother-See-of-Holy-Etchmiadzin/1.jpg")}/>*/}

                    <h2>{props.header}</h2>
                    <h6>{props.caption}</h6>
                    <p>{props.description}</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"item"}>
                    <div className={"imageNav"}>
                        {imgArr.map(x=>
                            <img key={x} src={require(`./${source}/${x}.jpg`)}/>
                        )}
                        <ModalComponent/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465883.9503245908!2d40.1618351!3d44.2889266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aca1c0c3d6bc3%3A0xfbfcc202cc1fcfbc!2sHnaberd%2C+Armenia!5e0!3m2!1sen!2s!4v1525446123836"
                    width="100%" height="400" frameBorder="0" style={{border:"0"}} allowFullScreen="">
                    </iframe>
                </Col>
            </Row>
            <Row className={"contacts"}>
                <Col xs="12" sm="10" md="6" lg="6" xl="6">
                    <Row>
                        <Col xs="2" className={"text-center"}><img src={iconAddress} alt=""/></Col>
                        <Col xs="10">{props.address}</Col>
                    </Row><hr/>
                    <Row>
                        <Col xs="2" className={"text-center"}><img src={iconPhone} alt=""/></Col>
                        <Col xs="10">{props.phoneNumber}</Col>
                    </Row><hr/>
                    <Row>
                        <Col xs="2" className={"text-center"}>
                            <a href={props.site[0]}><img src={iconSite} alt=""/></a>
                        </Col>
                        <Col xs="1">
                            <a href={props.site[1]}><img src={iconFacebook} alt=""/></a>
                        </Col>
                    </Row><hr/>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6">
                    <Row>
                        <Col xs="2" className={"text-center"}><img src={iconEmail} alt=""/></Col>
                        <Col xs="10">{props.email}</Col>
                    </Row><hr/>
                    <Row>
                        <Col xs="2" className={"text-center"}><img src={iconWorkTime} alt=""/></Col>
                        <Col xs="10">
                            <table className={"workTime"}>
                                <thead>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {   props.workTime &&
                                        props.workTime.map((x,i)=>
                                            <td key={i}>{x}</td>
                                        )
                                    }
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row><hr/>
                </Col>
            </Row>
        </Container>
    )
}