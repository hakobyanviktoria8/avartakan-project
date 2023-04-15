import React  from "react";
import Card from "./Card";

export default function Mountains(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/mountains"}
                title={"Լեռնաշխարհ"}
                srcName={"mountains/Aghdahak-mountain"}
            />
        </div>
    )
}