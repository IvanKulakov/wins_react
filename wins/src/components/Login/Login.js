import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import {useNavigate} from 'react-router';
import * as yup from 'yup';
import {NumericFormat} from 'react-number-format';
import './Form.scss';
import {customerOperations} from "../../store/user";
import {connect} from "react-redux";

const Login = ({ dispatch }) => {
    const hist = useNavigate();
    const setLogin = (data) =>{
    const body = JSON.stringify(data);
    dispatch(customerOperations.setLoginCustomer(body));
        console.log(body)
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
        <div className="form__wrapper wrapper">
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
                    <div className="form__container">
                        <p className="title">Login</p>
                        <div style={{ position: 'relative' }}>
                            <p className="input-from__wrapper input-from__wrapper--reg">
                                <label htmlFor="password" title="password">
                                    Пароль
                                    <input
                                        className="input-form input-form--reg"
                                        placeholder="Введите пароль"
                                        type="text"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </label>
                            </p>
                            {touched.password && errors.password && (
                                <p className="error__message error__message--reg">{errors.password}</p>
                            )}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <p className="input-from__wrapper input-from__wrapper--reg">
                                <label htmlFor="email" title="email">
                                    Почта
                                    <input
                                        className="input-form input-form--reg"
                                        placeholder="Введите Ваш email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </label>
                            </p>
                            {touched.email && errors.email && (
                                <p className="error__message error__message--reg">{errors.email}</p>
                            )}
                        </div>
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="button-submit ant-btn"
                            data-testid="button-submit"
                        >
                            Отправить
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
    };
};
export default connect(mapStateToProps) (Login);
