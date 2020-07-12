import React,{useContext, useState} from "react";
import app from "../Config/firebase";
import {AuthContext} from "../AuthProvider";
import person from "./person.png";
import "./Welcome.css";
import logo from "./logo.png"
import SlackMessageModal from "./SlackMessegeModal";

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
                        <h4><img src={logo} className={"logo"} alt=""/>ArmenianTrip</h4>
                        <hr/>
                        <h5>Բարի գալուստ</h5>
                        <h5>{`${currentUser.firstName} ${currentUser.lastName}`}</h5>
                        <span>{currentUser.email}</span><br/>
                        <span>{currentUser.phone}</span><br/>

                        <SlackMessageModal/>

                        <button onClick={() => app.auth().signOut()}>Դուրս գալ</button>
                    </div>
                )
            }
        </>

    )
}