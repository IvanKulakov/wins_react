import React from 'react';
import './NewMin.scss'
import Item from "../../components/Item/Item";


function NewMin () {
    return(
        <div className="item_block">
            <div className="wrapper">
                <h1>Новинки</h1>
                <div className="items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}

export default NewMin;