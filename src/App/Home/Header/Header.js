import React from "react";
import "./Header.css";
import ResponsivePlayer from "./ResponsivePlayer";
import PopularPlace from "./Popular/PopularPlace";

function Header(props) {
    return (
        <>
            <div className={"header"}>
                <ResponsivePlayer />
                <PopularPlace/>
            </div>
        </>
    )
}
export default Header