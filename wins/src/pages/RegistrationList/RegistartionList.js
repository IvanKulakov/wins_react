import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import {Link} from "react-router";
import "./RegistrationList.scss"
import {connect} from "react-redux";
import {languageOperations} from "../../store/language";

function RegistrationList({ dispatch, language }) {
    const uk ={
        link: "Повернутися назад",
    }
    const ru = {
        link: "Вернуться назад",
    }
    let mainLang = uk;
    useEffect(()=>{
        dispatch(languageOperations.getLanguage())
    }, [dispatch])
    if(language === "uk"){
        mainLang = uk;
    }
    if(language === "ru"){
        mainLang = ru;
    }
    return (
        <div>
            <Header />
            <Registration />
            <div className="reg_list_link_pos">
                <Link
                    to="/login"
                    className="reg_list_link"
                >
                    {mainLang.link}
                </Link>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        language: state.language.data,
    };
};
export default connect(mapStateToProps) (RegistrationList);