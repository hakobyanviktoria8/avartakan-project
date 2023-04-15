import React  from "react";
import Card from "./Card";

export default function Waterfalls(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/waterfalls"}
                title={"Ջրվեժներ"}
                srcName={"waterfalls/Arjajur-waterfall"}
            />
        </div>
    )
}
