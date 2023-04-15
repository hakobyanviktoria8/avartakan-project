import React  from "react";
import Card from "./Card";

export default function Parks(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/parks"}
                title={"Այգիներ"}
                srcName={"parks/Angliakan-Park"}
            />
        </div>
    )
}