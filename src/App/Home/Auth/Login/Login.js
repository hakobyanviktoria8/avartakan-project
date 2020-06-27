import React, { useCallback, useContext } from "react";
import app from "../Config/firebase";
import {AuthContext} from "../AuthProvider";
import { Navigate, useNavigate } from 'react-router-dom';
import "./login.css"

export const Login = (props) => {
    let navigate = useNavigate();
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                ;
                navigate("/");
            } catch (error) {
                alert(error);
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
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

