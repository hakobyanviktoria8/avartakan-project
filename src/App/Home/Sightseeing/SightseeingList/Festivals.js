import React  from "react";
import Card from "./Card";

export default function Festivals(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/festivals"}
                title={"Փառատոններ"}
                srcName={"festivals/Areni-wine-fest"}
            />
        </div>
    )
}