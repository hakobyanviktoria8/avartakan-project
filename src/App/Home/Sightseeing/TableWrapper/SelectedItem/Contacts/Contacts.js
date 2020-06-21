import React from "react";
import { Row, Col } from 'reactstrap';
import iconAddress from "../icon/address.png";
import iconPhone from "../icon/phone.png";
import iconEmail from "../icon/email.png";
import iconWorkTime from "../icon/workTime.png";

export function Contacts(props) {
    return(
        <div className={"contactNav"}>
            <Row>
                <Col xs="2" className={"text-center"}><img src={iconAddress} alt=""/></Col>
                <Col xs="10">{props.address}</Col>
            </Row><hr/>
            <Row>
                <Col xs="2" className={"text-center"}><img src={iconPhone} alt=""/></Col>
                <Col xs="10">{props.phoneNumber}</Col>
            </Row><hr/>
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
                            <td>5</td>
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
            </Row>
        </div>
    )
}