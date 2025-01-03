import React, {useEffect} from 'react';
import About from "./About";
import NewMin from "./NewMin";
import {connect} from "react-redux";
import {itemsOperations} from "../../store/items";
import {brandsOperations} from "../../store/brands";
import Header from "../../components/Header/Header";
import {tokenOperations} from "../../store/token";
import {languageOperations} from "../../store/language";

function Main ({ dispatch }) {
    useEffect(()=>{
        dispatch(itemsOperations.getItems());
        dispatch(brandsOperations.getBrands())
        dispatch(tokenOperations.getToken());
        dispatch(languageOperations.getLanguage())

    }, [dispatch])

    return(
        <div>
            <Header />
            <NewMin />
            <About />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        item: state.items.data.rows,
        brands: state.brands.data,
        language: state.language.data,

    };
};

export default connect(mapStateToProps) (Main);