import React from 'react';
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import Login from "../../components/Login/Login";
import {Link} from "react-router";

function LoginList(props) {
    return (
        <div>
            <Header />

            <Login />
            <p> or </p>
            <Link to='/registration' >
                registration
            </Link>
        </div>
    );
}

export default LoginList;