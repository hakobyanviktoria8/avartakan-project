import React  from "react";
import Card from "./Card";

export default function Restaurants(props) {
    return(
        <div>
            <Card url={"https://am-places.herokuapp.com/restaurants"} title={"Ռեստորաններ"}/>
        </div>
    )
}