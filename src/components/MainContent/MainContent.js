import React from "react";
import "./MainContent.css";
import TesarjanVayrer from "./TesarjanVayrer/TesarjanVayrer";
import PopularTurer from "./PopularTurer/PopularTurer";

function MainContents(props) {
    return (
        <>
            <TesarjanVayrer />
            <hr/>
            <PopularTurer />
        </>
    )
}
export default MainContents