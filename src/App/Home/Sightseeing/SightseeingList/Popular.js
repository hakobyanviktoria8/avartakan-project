import React  from "react";
import Card from "./Card";

export default function Popular(props) {
    return(
        <div>
            <Card
                url={"https://json-server-data.onrender.com/popular"}
                title={"Ամենահայտնի"}
                srcName={"popular/Ararati-konyaki-gorcaran"}
            />
        </div>
    )
}
