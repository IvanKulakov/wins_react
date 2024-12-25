import React from 'react';
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import {Link} from "react-router";

function RegistrationList() {
    return (
        <div>
            <Header />

            <Registration />
        </div>
    );
}

export default RegistrationList;