import React from "react";
import {ReactComponent as Star} from "../../assets/starLarge.svg";
import {ReactComponent as StarGrey} from "../../assets/starLG.svg";

function StartsLarge({stars}){
    const starMax = 5;
    let greyStars = starMax - stars;
    return (
    <div>
        {starMax!==0 ? [...Array(stars)].map((item, index) => <Star key={index} /> ) : false}
        {greyStars!== 0 ? [...Array(greyStars)].map((item, index) => <StarGrey key={index} /> ) : false }
    </div>
    )
}

export default StartsLarge;