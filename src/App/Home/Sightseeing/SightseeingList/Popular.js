import React  from "react";
import Card from "./Card";

export default function Popular(props) {
    return(
        <div>
            <Card url={"https://am-places.herokuapp.com/popular"} title={"Ամենահայտնի"}/>
        </div>
    )
}
