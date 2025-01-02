import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import ItemLarge from "../../components/ItemLarge/ItemLarge";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {itemOperations} from "../../store/item";
import {languageOperations} from "../../store/language";
import Loader from "../../components/Loader/Loader";

function ItemOpen({ dispatch, isLoading, item }) {
    const data = useParams()
    useEffect(()=>{
        dispatch(itemOperations.getItem(data.id));
        dispatch(languageOperations.getLanguage())

    }, [dispatch])
    return <div>
        <Header />
        {isLoading? <Loader /> : <ItemLarge item={item}/>}
    </div>
}
const mapStateToProps = (state) => {
    return {
        item: state.item.data,
        isLoading: state.item.isLoading,
        language: state.language.data,

    };
};

export default connect(mapStateToProps) (ItemOpen);