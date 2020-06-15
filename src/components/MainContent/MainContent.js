import React from "react";
import "./MainContent.css";
import Sightseeing from "./Sightseeing/Sightseeing";
import PopularTour from "./PopularTours/PopularTоurs";

function MainContents(props) {
    return (
        <>
            <Sightseeing />
            <PopularTour />
        </>
    )
}
export default MainContents