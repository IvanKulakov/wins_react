import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {Link} from "react-router";
import {customerOperations} from "../../store/user";
import {connect} from "react-redux";
import axios from "axios";
import {tokenOperations} from "../../store/token";

function UserInfo({ dispatch, token, user }) {
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
    const {role} = user;
    return (
        <div>
            <Header />
           <p>userInfo</p>
            <div>
                {role === "ADMIN" ? (
                    <Link to="/admin">
                        <p>вы админ</p>
                    </Link>
                ) : undefined}
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.user.data,
        token: state.token.data,

    };
};

export default connect(mapStateToProps)(UserInfo);