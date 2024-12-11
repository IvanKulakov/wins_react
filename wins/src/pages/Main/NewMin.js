import React, {useEffect} from 'react';
import './NewMin.scss'
import Item from "../../components/Item/Item";
import {connect} from "react-redux";
import {itemsOperations} from "../../store/items";
import {brandsOperations} from "../../store/brands";
import {typeOperations} from "../../store/type";


function NewMin ({ dispatch }) {
    useEffect(()=>{
        dispatch(itemsOperations.getItems());
        dispatch(brandsOperations.getBrands());
        dispatch(typeOperations.getType())
    }, [dispatch])
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
const mapStateToProps = (state) => {
    return {
        item: state.items.data,
        brands: state.brands.data,
        type: state.type.data,

    };
};
export default connect(mapStateToProps)(NewMin);