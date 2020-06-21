import React from "react";
import "./itemImages.css"

export function Images(props) {
    return(
        <div className={"imageNav"}>
            {
                props.img.map((x,i) => (
                        <img src={x} key={i} alt=""/>
                    )
                )
            }
        </div>
    )
}