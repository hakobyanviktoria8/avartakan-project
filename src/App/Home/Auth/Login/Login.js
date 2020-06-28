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
            <form onSubmit={handleLogin}>
                <div className="row">
                    <div className="col-75">
                        <input className={"loginInput"} type="email" name="Email" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-75">
                        <input className={"loginInput"} type="password" name="pssword" placeholder="Enter your password"/>
                    </div>
                </div>
                <div className="row">
                    <input className={"loginBtn"} type="submit" value="Մուտք"/>
                </div>
            </form>
        </div>
    );
};

