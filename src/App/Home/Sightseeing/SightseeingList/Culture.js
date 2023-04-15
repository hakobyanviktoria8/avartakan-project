import React  from "react";
import Card from "./Card";

export default function Culture(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/culture"}
                title={"Մշակույթ"}
                srcName={"culture/Armenian-alphabet"}
            />
        </div>
    )
}