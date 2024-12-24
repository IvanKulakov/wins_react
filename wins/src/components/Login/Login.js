import React, {useEffect} from 'react';
import { Formik } from 'formik';
import {useNavigate} from 'react-router';
import * as yup from 'yup';
import './Login.scss';
import {customerOperations} from "../../store/user";
import {connect} from "react-redux";
import {tokenOperations} from "../../store/token";
import {languageOperations} from "../../store/language";

const Login = ({ dispatch, language }) => {
    const uk ={
        title: "Увійти",
        email: "Електронна пошта",
        password: "Введіть пароль",
        btn: "Увійти",

    }
    const ru = {
        title: "Войти",
        email: "Электронная почта",
        password: "Введите пароль",
        btn: "Войти",
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
    const hist = useNavigate();
    const setLogin = (data) =>{
    dispatch(customerOperations.setLoginCustomer(JSON.stringify(data)));
    dispatch(tokenOperations.getToken());

        hist('/');
    }
    const validationSchema = yup.object().shape({
        password: yup
            .string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            .required('Поле обязательно для ввода'),
        email: yup.string().email('Введите корректный email').required('Поле обязательно для ввода'),
    });
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={(values) => {
                    setLogin(values);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className="login_container">
                        <h3>{mainLang.title}</h3>
                        <div className="input_box">
                                    <input
                                        className=""
                                        placeholder={mainLang.email}
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />

                        </div>
                        <div className="input_box">
                                    <input
                                        className=""
                                        placeholder={mainLang.password}
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                        </div>

                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className=""
                            data-testid="button-submit"
                        >
                            {mainLang.btn}
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        token: state.token.data,
        user: state.user.data,
        language: state.language.data,
    };
};
export default connect(mapStateToProps) (Login);
