import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import {Link} from "react-router";
import {customerOperations} from "../../store/user";
import {connect} from "react-redux";
import axios from "axios";
import {tokenOperations} from "../../store/token";

function UserInfo({ user }) {

    const {name, lastname} = user;
    const {role} = user;
    return (
        <div className="wrapper">
            <Header />
           <p>Доброго дня {name} {lastname}!!</p>

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