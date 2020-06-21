import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

export function Home(props) {
    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}