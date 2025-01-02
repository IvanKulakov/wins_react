import React from "react";
import {ReactComponent as Star} from "../../assets/starLarge.svg";

function StartsLarge({stars}){
    return (
    <div>
        { [...Array(stars)].map((item, index) => <Star key={index} /> ) }
    </div>
    )
}

export default StartsLarge;