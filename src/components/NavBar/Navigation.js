import React, { useState } from 'react';
import "./Navigation.css";
import {Collapse, Navbar, NavbarToggler, Nav} from 'reactstrap';
import {BrowserRouter as Router,Link, Switch, Route} from "react-router-dom";
import logo from "./logo.png";

export default function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Link className={"mx-3"} to="/"><img src={logo} alt="logo" style={{width:80,float:"left"}}/></Link>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Link className={"mx-3 link"} to={"/sightseeing"}>Տեսարժան վայրեր</Link>
                        <Link className={"mx-3 link"} to={"/popular-place"}>Ամենահայտնի վայրեր</Link>
                        <Link className={"mx-3 link"} to={"/registration"}>Գրանցվել</Link>
                    </Nav>
                </Collapse>
            </Navbar>
            {/*scrol ani h2i vra ??????????????????????????????????????????????????????????????????????*/}
            <Switch>
                {/*<Route path={"/sightseeing"}><Sightseeing /></Route>*/}
                {/*<Route path={"/popular-place"}><PopularPlace /></Route>*/}
            </Switch>
        </Router>
    );
}

