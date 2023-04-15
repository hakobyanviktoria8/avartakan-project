import React  from "react";
import Card from "./Card";

export default function WineHouses(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/wineHouses"}
                title={"Գինետներ"}
                srcName={"winehouses/Ginetun"}
            />
        </div>
    )
}