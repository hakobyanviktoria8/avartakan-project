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
    let source = `Images/${!section && props.valueSection}/${props.name}`;
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
                    <h2>{props.header}</h2>
                    <h6>{props.caption}</h6>
                    <p>{props.description}</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"item"}>
                    <div className={"imageNav"}>
                        {imgArr.map(x=>
                            <img key={x} src={require(`./${source}/${x}.jpg`)}/>
                        )}
                        <ModalComponent sliderImg={sliderImg}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    {console.log(props.coordinates)}
                    <iframe
                        src={props.coordinates}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{border:"0"}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0">
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
                                    <td>Երկ</td>
                                    <td>Երք</td>
                                    <td>Չոր</td>
                                    <td>Հնգ</td>
                                    <td>Ուրբ</td>
                                    <td>Շաբ</td>
                                    <td>Կիր</td>
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