import React, { useCallback, useContext } from "react";
import app from "../Config/firebase";
import {AuthContext} from "../AuthProvider";
import { Navigate, useNavigate } from 'react-router-dom';
import "./login.css";
import { Container, Row, Col } from 'reactstrap';

export const Login = (props) => {
    let navigate = useNavigate();
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app.auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                navigate("/");
            } catch (error) {
                alert("Մուտքանունի կամ գաղտնաբառի սխալ մուքտ ...! Խնդրում ենք փոորձել կրկին:");
            }
        }
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div className={"login"}>
            <h2 className={"title"}>Մուտք գործել</h2>
            <Container>
            <form onSubmit={handleLogin}>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"} name="email" type="email" placeholder="Email" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input className={"p-2"} name="password" type="password" placeholder="Password" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs="10" sm="8" md="6" lg="5" xl="4" className="colSize">
                        <input type="submit"  className={"p-2"} value="Գրանցվել" />
                    </Col>
                </Row>
            </form>
            </Container>
        </div>
    );
};

