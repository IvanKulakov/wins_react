import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Redirect, Switch
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import DeliveryPayment from "../pages/Delivery&payment/DeliveryPayment";
import NotFound from "../pages/NotFound/NotFound";
import AdminTool from "../pages/Admin/AdminTool";
import Login from "../pages/Login/Login";
import {connect} from "react-redux";
import {tokenOperations} from "../store/token";
import axios from "axios";
import {customerOperations} from "../store/user";

function AppRoutes({ dispatch, user, token }) {
    useEffect(() => {
        const tokenAuth = JSON.parse(localStorage.getItem('token'));
        if (tokenAuth) {
            axios.defaults.headers.common.Authorization = tokenAuth;
            dispatch(customerOperations.getCustomer())
        }
        // else {
        //     axios.defaults.headers.common.Authorization = null;
        // }
        dispatch(tokenOperations.getToken());
        }, [dispatch]);
    const isAuth = !!user.name;
    console.log(isAuth);
    return (
        <Router>
            <Routes>
                <Route path='/main' element={<Main />}/>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={isAuth ? <AdminTool /> : <Navigate replace to="/login" />}/>
                <Route path='/delivery_payment' element={<DeliveryPayment />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );

}

const mapStateToProps = (state) => {
    return {
        token: state.token.data,
        user: state.user.data,
    };
};

export default connect(mapStateToProps) (AppRoutes);