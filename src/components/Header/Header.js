import React from "react";
import "./Header.css";
import ResponsivePlayer from "./Home/ResponsivePlayer";
import Navbar from "./NavBar/NavBar";


function Header(props) {
    return (
        <div className={"header"}>
            <Navbar />
            <ResponsivePlayer />
        </div>
    )
}
export default Header