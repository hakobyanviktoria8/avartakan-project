import React  from "react";
import Card from "./Card";

export default function Restaurants(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/restaurants"}
                title={"Ռեստորաններ"}
                srcName={"restaurants/Atsux-restaurant"}
            />
        </div>
    )
}