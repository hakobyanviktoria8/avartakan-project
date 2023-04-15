import React  from "react";
import Card from "./Card";

export default function Museums(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/museums"}
                title={"Թանգարաններ"}
                srcName={"museums/Aram-Ghachatryan"}
            />
        </div>
    )
}