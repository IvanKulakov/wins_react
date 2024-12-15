import React from 'react';
import Header from "../../components/Header/Header";
import RegistrationList from "../../components/RegistrationList/RegistrationList";
import Login from "../../components/Login/Login";

function LoginList(props) {
    return (
        <div>
            <Header />

            {/*<RegistrationList />*/}
            {/*<p> or </p>*/}
            <Login />

        </div>
    );
}

export default LoginList;