import React from 'react';
import './navbar.css';
import logo from './logo.png';

function Navbar(props) {
    return(
        <div className="navbar">
            <a href="#">
                <img id="logo" src={logo} alt="logo"/>
            </a>
            <label for="toggle-1" className="toggle-menu">
                <ul>
                    <li></li>
                    <li></li> 
                    <li></li>
                </ul>
            </label>
            <input type="checkbox" id="toggle-1"></input>
            <nav>
                <ul>
                    <li><a href="#home">Գլխավոր</a></li>
                    <li><a href="#place">Տեսարժան Վայրեր</a></li>
                    <li><a href="#turs">Պահանջված Տուրեր</a></li>
                    <li><a href="#search">Փնտրել</a></li>
                    <li><a href="#login">Գրանցվել</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar