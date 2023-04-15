import React  from "react";
import Card from "./Card";

export default function Church(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/church"}
                title={"Եկեղեցիներ"}
                srcName={"church/Garni-Temple"}
            />
        </div>
    )
}
