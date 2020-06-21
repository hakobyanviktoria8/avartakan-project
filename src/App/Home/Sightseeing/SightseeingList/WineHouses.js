import React  from "react";
import Card from "./Card";

export default function WineHouses(props) {
    return(
        <div>
            <Card url={"https://am-places.herokuapp.com/wineHouses"} title={"Գինետներ"}/>
        </div>
    )
}