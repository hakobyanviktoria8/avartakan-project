import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Search.css";
import ciran from "./img/ciran.png";
import duduk from "./img/duduk.png";
import kamancha from "./img/kamancha.png";
import nur from "./img/nur.png";
import nur3 from "./img/nur3.png";


export function Search(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <div className={"search"}>
            <h2 className={"title"}>Որոնել</h2>

            <Container>
                <Row className={"mx-auto"}>
                    <Col xs="2" sm="2" md="2" lg="2" xl="2"> </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <form>
                            <label>
                                <span>Բնագավառ</span>
                                <select className={"dropdown"}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                        {/*<Dropdown isOpen={dropdownOpen} toggle={toggle}>*/}
                            {/*<DropdownToggle caret className={"dropdown"}>*/}
                                {/*Բնագավառ*/}
                            {/*</DropdownToggle>*/}
                            {/*<DropdownMenu>*/}
                                {/*/!*<DropdownItem header>11 </DropdownItem>*!/*/}
                                {/*<DropdownItem>Some Action</DropdownItem>*/}
                                {/*<DropdownItem>Foo Action</DropdownItem>*/}
                                {/*<DropdownItem>Bar Action</DropdownItem>*/}
                                {/*<DropdownItem>Quo Action</DropdownItem>*/}
                                {/*<DropdownItem>Some Action</DropdownItem>*/}
                                {/*<DropdownItem>Foo Action</DropdownItem>*/}
                                {/*<DropdownItem>Bar Action</DropdownItem>*/}
                                {/*<DropdownItem>Quo Action</DropdownItem>*/}
                                {/*/!*<DropdownItem divider />*!/*/}
                                {/*/!*<DropdownItem disabled>Action (disabled)</DropdownItem>*!/*/}
                            {/*</DropdownMenu>*/}
                        {/*</Dropdown>*/}
                    </Col><Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret className={"dropdown"}>
                                Բնագավառ
                            </DropdownToggle>
                            <DropdownMenu>
                                {/*<DropdownItem header>11 </DropdownItem>*/}
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                                {/*<DropdownItem divider />*/}
                                {/*<DropdownItem disabled>Action (disabled)</DropdownItem>*/}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            <img className={"ciran"} src={ciran} alt=""/>
            <img className={"duduk"} src={duduk} alt=""/>
            <img className={"kamancha"} src={kamancha} alt=""/>
            <img className={"nur"} src={nur} alt=""/>
            <img className={"nur3"} src={nur3} alt=""/>
        </div>
    )
}
