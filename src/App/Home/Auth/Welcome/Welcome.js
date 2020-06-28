import React,{useContext, useState} from "react";
import app from "../Config/firebase";
import {AuthContext} from "../AuthProvider";
import person from "./person.png";
import "./Welcome.css";
import logo from "./logo.png"

export function Welcome(props) {
    const {currentUser} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleShowCard = () => setShow(!show);

    return(
        <>
            <div>
                <img src={person}  onClick={handleShowCard} alt=""/>
            </div>
            {
                show &&
                (
                    <div className={"pesonCard"}>
                        <h3><img src={logo} className={"logo"} alt=""/>ArmenianTrip</h3>
                        <hr/>
                        <h4>Բարի գալուստ</h4>
                        <h5>{`${currentUser.firstName} ${currentUser.lastName}`}</h5>
                        <p>{currentUser.email}</p>
                        <p>{currentUser.phone}</p>
                        <button onClick={() => app.auth().signOut()}>Դուրս գալ</button>
                    </div>
                )
            }
        </>

    )
}