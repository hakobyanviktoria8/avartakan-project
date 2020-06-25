import React, { useState } from 'react';
import "./Navigation.css";
import {Collapse, Navbar, NavbarToggler, Nav} from 'reactstrap';
import {Link} from "react-router-dom";
import logo from "./logo.png";

export default function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md" className={"navigation"}>
                <NavbarToggler onClick={toggle} />
                <Link className={"mx-3"} to="/"><img src={logo} alt="logo" style={{width:80}}/></Link>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto bg-light" navbar>
                        <Link className={"mx-3 link"} to="/sightseeing">Տեսարժան վայրեր</Link>
                        <Link className={"mx-3 link"} to="/popular-place">Ամենահայտնի վայրեր</Link>
                        <Link className={"mx-3 link"} to="/registration">Գրանցվել</Link>
                        <Link className={"mx-3 link"} to="/search">Փնտրել</Link>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

