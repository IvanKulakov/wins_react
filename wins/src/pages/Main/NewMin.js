import React, {useEffect} from 'react';
import './NewMin.scss'
import Item from "../../components/Item/Item";
import {connect} from "react-redux";
import {itemsOperations} from "../../store/items";
import {languageOperations} from "../../store/language";


function NewMin ({dispatch, item}) {
    useEffect(()=>{
        dispatch(itemsOperations.getItems());
        dispatch(languageOperations.getLanguage())

    }, [dispatch])

    if (!item){
        return (
            <div>
                <p>no items</p>
            </div>
        )
    }
    const itemRender =  item.map((i) => {
        return <Item item={i} key={i.id} />}
    )
    return(
        <div className="item_block">
            <div className="wrapper">
                <h1>Новинки</h1>
                <div className="items">
                    {itemRender}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        item: state.items.data.rows,
        language: state.language.data,

    };
};

export default connect(mapStateToProps) (NewMin);
