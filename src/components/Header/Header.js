import React from "react";
import "./Header.css";
import ResponsivePlayer from "./Home/ResponsivePlayer";


function Header(props) {
    return (
        <div className={"header"}>
            <ResponsivePlayer />
        </div>
    )
}
export default Header