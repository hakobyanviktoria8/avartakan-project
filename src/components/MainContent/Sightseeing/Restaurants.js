import React  from "react";
import Card from "./Card";

export default function Restaurants(props) {
    return(
        <div>
            <Card url={"http://localhost:3000/restaurants"} title={"Ռեստորսններ"}/>
        </div>
    )
}