import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import {Link} from "react-router";
import "./LoginList.scss"
import {connect} from "react-redux";
import {languageOperations} from "../../store/language";

function LoginList({dispatch, language}) {
    const uk = {
        title: "Вхід в обліковий запис",
        titleh2: "Немає облікового запису?",
        content: "Щоб робити покупки як приватний клієнт, вам не потрібен обліковий запис у нас. Просто почніть вибирати продукти, які хочете купити. Але як постійний клієнт, реєстрація облікового запису має багато переваг: швидше завершуйте покупки, зберігайте кілька адрес, відстежуйте замовлення тощо.",
        btn: "Створити обліковий запис",
    }
    const ru = {
        title: "Вход в аккаунт",
        titleh2: "Нет учетной записи?",
        content: "Чтобы делать покупки как частный клиент, вам не нужна учетная запись у нас. Просто начните выбирать продукты, которые хотите купить. Но как постоянный клиент, регистрация аккаунта имеет много преимуществ: быстрее завершайте покупки, сохраняйте несколько адресов, отслеживайте заказы и т.д. .",
        btn: "Создать аккаунт",
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
            <div className="wrapper loginlist_block">
                <h1>{mainLang.title}</h1>
                <div className="loginlist_pos">
                    <Login />
                    <div className="loginlist_content">
                        <h2>
                            {mainLang.titleh2}
                        </h2>
                        <p>
                            {mainLang.content}
                        </p>
                        <Link
                            className="loginlist_btn"
                            to="/registration">
                            {mainLang.btn}
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.language.data,
    };
};
export default connect(mapStateToProps) (LoginList);