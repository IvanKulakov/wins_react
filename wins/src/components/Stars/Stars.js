import React from 'react';
import {ReactComponent as Star} from "../../assets/starSmall.svg";
import {ReactComponent as StarGrey} from "../../assets/startSG.svg";


function Stars ({stars}) {
    const starMax = 5;
    let greyStars = starMax - stars;
    return (
        <div>
            {starMax!==0 ? [...Array(stars)].map((item, index) => <Star key={index} /> ) : false}
            {greyStars!== 0 ? [...Array(greyStars)].map((item, index) => <StarGrey key={index} /> ) : false }
        </div>
    )}

export default Stars;