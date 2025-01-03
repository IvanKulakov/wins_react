import React from 'react';
import './Item.scss'
import Stars from "../Stars/Stars";
import {Link, useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

function Item ({item}) {
    const {name, price, img, stars, id} = item;
    const link = useLocation().pathname;
    return(
        <div className="item">
            <Link to={link+'/'+id}>
            <img src={process.env.REACT_APP_SERVER + img} className="item_img"/>
            </Link>
            <p className="item_title">{name}</p>
            <Stars stars={stars}/>
            <p className="item_availability">
                В наявності
            </p>
            <p className="item_price">
                {price}
            </p>
            <div className="item_btns">
                <div className="quantity_btn">
                    <p className="quantity_btn_less">-</p>
                    <p className="quantity">1</p>
                    <p className="quantity_btn_less">+</p>
                </div>
                <div className="buy_btn">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4238 5.5H13.5762C13.5762 4.86979 13.4616 4.27539 13.2324 3.7168C12.9889 3.1582 12.6595 2.67122 12.2441 2.25586C11.8288 1.84049 11.3418 1.51107 10.7832 1.26758C10.2246 1.03841 9.63021 0.923828 9 0.923828C8.36979 0.923828 7.77539 1.03841 7.2168 1.26758C6.6582 1.51107 6.17122 1.84049 5.75586 2.25586C5.34049 2.67122 5.01107 3.1582 4.76758 3.7168C4.53841 4.27539 4.42383 4.86979 4.42383 5.5H2.57617C2.07487 5.5 1.64518 5.67904 1.28711 6.03711C0.929036 6.39518 0.75 6.82487 0.75 7.32617V18.3262C0.75 18.8418 0.929036 19.2786 1.28711 19.6367C1.64518 19.9948 2.07487 20.1738 2.57617 20.1738H15.4238C15.9251 20.1738 16.3548 19.9948 16.7129 19.6367C17.071 19.2786 17.25 18.8418 17.25 18.3262V7.32617C17.25 6.82487 17.071 6.39518 16.7129 6.03711C16.3548 5.67904 15.9251 5.5 15.4238 5.5ZM9 2.75C9.75911 2.75 10.4072 3.01855 10.9443 3.55566C11.4814 4.09277 11.75 4.74089 11.75 5.5H6.25C6.25 4.74089 6.51855 4.09277 7.05566 3.55566C7.59277 3.01855 8.24089 2.75 9 2.75ZM9 11.9238C8.36979 11.9238 7.77539 11.8021 7.2168 11.5586C6.6582 11.3151 6.17122 10.9857 5.75586 10.5703C5.34049 10.1549 5.01107 9.66797 4.76758 9.10938C4.53841 8.55078 4.42383 7.95638 4.42383 7.32617H6.25C6.25 8.08529 6.51855 8.7334 7.05566 9.27051C7.59277 9.80762 8.24089 10.0762 9 10.0762C9.75911 10.0762 10.4072 9.80762 10.9443 9.27051C11.4814 8.7334 11.75 8.08529 11.75 7.32617H13.5762C13.5762 7.95638 13.4616 8.55078 13.2324 9.10938C12.9889 9.66797 12.6595 10.1549 12.2441 10.5703C11.8288 10.9857 11.3418 11.3151 10.7832 11.5586C10.2246 11.8021 9.63021 11.9238 9 11.9238Z"
                            fill="white"/>
                    </svg>
                    <p className="buy_btn_p">Купити</p>
                </div>
            </div>
        </div>
    )
}

export default Item;