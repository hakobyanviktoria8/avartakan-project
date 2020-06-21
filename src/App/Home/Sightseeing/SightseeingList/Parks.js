import React  from "react";
import Card from "./Card";

export default function Parks(props) {
    return(
        <div>
            <Card url={"https://am-places.herokuapp.com/parks"} title={"Այգիներ"}/>
        </div>
    )
}