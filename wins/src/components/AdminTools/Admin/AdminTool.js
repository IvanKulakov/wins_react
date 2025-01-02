import React, {useEffect} from 'react';
import Header from "../../Header/Header";
import AddProduct from "../ProductAdmin/AddProduct";
import AddType from "../TypesAdmin/AddType";
import AddBrand from "../BrandsAdmin/AddBrand";
import {connect} from "react-redux";
import axios from "axios";
import {customerOperations} from "../../../store/user";
import {tokenOperations} from "../../../store/token";
import {languageOperations} from "../../../store/language";
import {Link} from "react-router";

function AdminTool({dispatch}) {
    useEffect(() => {
        const tokenAuth = JSON.parse(localStorage.getItem('token'));
        if (tokenAuth) {
            axios.defaults.headers.common.Authorization = tokenAuth;
            dispatch(customerOperations.getCustomer())
        }
        else {
            axios.defaults.headers.common.Authorization = null;
        }
        dispatch(tokenOperations.getToken());
        dispatch(languageOperations.getLanguage())
    }, [dispatch]);
    return (
        <div className="wrapper">
            <Header />
            <p>ADMINTOOL</p>

            <Link to="/admin/types">types</Link>
            <Link to="/admin/brands">brands</Link>
            <Link to="/admin/products">products</Link>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data,
        token: state.token.data,
    };
};

export default connect(mapStateToProps) (AdminTool);