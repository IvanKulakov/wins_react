import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import {Link} from "react-router";
import axios from "axios";
import {customerOperations} from "../../store/user";
import {tokenOperations} from "../../store/token";
import {connect} from "react-redux";

function UserInfo({ dispatch, user, token }) {
    useEffect(() => {
        dispatch(customerOperations.getCustomer())
        dispatch(tokenOperations.getToken());
    }, [dispatch]);
    const {role} = user;
    console.log(role)
    const isAuth = !!user.name;
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
    };
};

export default connect(mapStateToProps)(UserInfo);