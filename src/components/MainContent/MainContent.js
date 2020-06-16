import React from "react";
import "./MainContent.css";
import Sightseeing from "./Sightseeing/Sightseeing";
import PopularPlace from "./PopularPlace/PopularPlace";

function MainContents(props) {
    return (
        <>
            <Sightseeing />
            <PopularPlace />
        </>
    )
}
export default MainContents