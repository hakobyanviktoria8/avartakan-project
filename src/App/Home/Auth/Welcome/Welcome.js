import React,{useContext, useState} from "react";
import app from "../Config/firebase";
import {AuthContext} from "../AuthProvider";
import person from "./person.png";
import "./Welcome.css"

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
                        <h3>{currentUser.firstName}</h3>
                        <button onClick={() => app.auth().signOut()}>Log out</button>
                    </div>
                )
            }
        </>

    )
}