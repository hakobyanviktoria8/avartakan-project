import React  from "react";
import Card from "./Card";

export default function Lakes(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/lakes"}
                title={"Լճեր"}
                srcName={"lakes/Ajdahak-lake"}
            />
        </div>
    )
}