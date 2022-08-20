import React from "react";

export default function Star(props){
    return(
        <img
            src={props.isFilledBool ? require("../src/star-filled.png") : require("../src/star-empty.png")}
            className="card--favorite"
            onClick={props.clickState}
            alt=""
        />
    )
}