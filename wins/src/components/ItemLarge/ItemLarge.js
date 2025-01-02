import React, {useState} from "react";
import "./ItemLarge.scss"
import StartsLarge from "../StartsLarge/StartsLarge";
import {ReactComponent as Like} from "../../assets/like.svg";
import {ReactComponent as CartW} from "../../assets/cartW.svg";

function ItemLarge({item}) {
    const {name, img, about, stars, price, id} = item;
    const [count, setCount] = useState(1)
    const countMore = () =>{
        setCount(count + 1)
    }
    const countLess = () =>{
        if(count === 1){
            return false
        }
        setCount(count-1)
    }
    console.log(stars)
    return(
        <div className="wrapper2">
            <div className="itemLargeTitleBox">
                <p className="itemLargeName">{name}</p>
                <p className="itemLargeId">
                    Код: {id}
                </p>
            </div>
            <div className="itemLargeContentPos">
            <div>
                <img className="itemLargeImg" src={process.env.REACT_APP_SERVER + img}/>
                <div className="itemLargeAboutTitleBox">
                    <p className="itemLargeAboutTitle">Опис</p>
                    <p className="itemLargeAboutTitle">Відгуки</p>
                </div>
                <p className="itemLargeAboutContext">
                    {about}
                </p>
            </div>
            <div>
                <div className="itemLargePriceBlock">
                    <div className="itemLargePriceBlockTop">
                        <StartsLarge stars={stars}/>
                        <p className="itemLargePriceBlockTopResp">Написати відгук</p>
                        <p className="itemLargePriceBlockTopPres">В наявності</p>
                    </div>
                    <div className="itemLargePriceBlockCentre">
                        <h2>{price} грн</h2>
                        <div>
                            <Like /><p>Додати до переліку побажань</p>
                        </div>

                    </div>
                    <div className="itemLargePriceBlockBottom">
                        <div className="itemLargePriceBlockBottomCounter">
                                <div
                                    onClick={countLess}> <p>-</p> </div>
                                <h2>{count}</h2>
                                <div
                                    onClick={countMore}> <p>+</p> </div>
                                </div>
                        <div className="itemLargePriceBlockBottomBtnBasket">
                                <div>
                                    <CartW />
                                </div>
                                <p>Купити</p>
                        </div>
                        <p className="itemLargePriceBlockBottomBtnBuyNow">Купити в 1-клік</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ItemLarge;