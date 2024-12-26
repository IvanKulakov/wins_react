import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {Formik, Field} from "formik";
import "./Сertificate.scss"
import {  message } from 'antd';
import {ReactComponent as BtnIcon} from "../../assets/cartW.svg";
import {connect} from "react-redux";
import {languageOperations} from "../../store/language";


function Certificate({ dispatch, language }) {
    const uk = {
        title: " Придбати подарунковий сертифікат",
        required: "Поле обов'язкове для введення",
        correctemail: "Введіть правильний email",
        success: "Сертифікат відправлено!",
        to: "Кому",
        from: "Від",
        sum: "Сума",
        sumcoast: "Значення повинно бути між 200 грн і 20000 грн",
        message: "Повідомення",
        send: "Як надіслати?",
        sendemail: "Відправити по електронній пошті",
        sendpost: "Відправити поштою",
        btn: "Купити",
    }
    const ru ={
        title: "Купить подарочный сертификат",
        required: "Поле обязательно для ввода",
        correctemail: "Введите корректный email",
        success: "Сертификат отправлен!",
        to: "Кому",
        from: "От",
        sum: "Сумма",
        sumcoast: "Значение должно быть между 200 и 20000 грн.",
        message: "Сообщение",
        send: "Как отправить?",
        sendemail: "Отправить по электронной почте",
        sendpost: "Отправить почтой",
        btn: "Купить",
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
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: `${mainLang.success}`,
            duration: 5,
        });
    };
    const validationSchema = yup.object().shape({
        nameto: yup
            .string()
            .required(`${mainLang.required}`),
        namefrome: yup
            .string()
            .required(`${mainLang.required}`),
        coast:yup
            .number()
            .min(200, 'Min 200')
            .max(20000, 'Max 20000')
            .required(`${mainLang.required}`),
        message:yup
            .string(),
        email: yup
            .string().email(`${mainLang.correctemail}`)
            .required(`${mainLang.required}`),
    });
    return (
        <div className="wrapper certificate_block">
            <h1>{mainLang.title}</h1>
            <Formik
                initialValues={{
                    nameto: '',
                    namefrome: '',
                    coast: '',
                    message: '',
                    picked: '',
                    email: '',
                }}
                validateOnBlur
                onSubmit={(values, {resetForm} ) => {
                    console.log(values);
                    success()
                    resetForm()
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className="certificate_box">
                        <div className="certificate">
                            <h2>{mainLang.to}<span>*</span></h2>
                                    <input
                                        className=""
                                        placeholder=""
                                        type="text"
                                        name="nameto"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nameto}
                                    />
                            {touched.nameto && errors.nameto && (
                                <p className="error__message__certificate error__message__certificate--reg">{errors.nameto}</p>
                            )}
                        </div>
                        <div className="certificate">
                            <h2>{mainLang.from}<span>*</span></h2>
                                    <input
                                        className=""
                                        placeholder=""
                                        type="text"
                                        name="namefrome"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.namefrome}
                                    />
                            {touched.namefrome && errors.namefrome && (
                                <p className="error__message__certificate error__message__certificate--reg">{errors.namefrome}</p>
                            )}
                        </div>
                        <div className="certificate_coast">
                            <h2>{mainLang.sum}<span>*</span></h2>
                            <div>
                                <input
                                    className=""
                                    placeholder=""
                                    type="number"
                                    name="coast"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.coast}
                                />
                                <p className="certificate_coast_uah">грн</p>
                            </div>
                            <p className="certificate_coast_p">{mainLang.sumcoast}</p>
                            {touched.coast && errors.coast && (
                                <p className="error__message__certificate error__message__certificate--reg">{errors.coast}</p>
                            )}
                        </div>
                        <div className="certificate_message">
                            <h2>{mainLang.message}</h2>
                                    <textarea
                                        rows={6}
                                        className=""
                                        placeholder=""
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                            {touched.message && errors.message && (
                                <p className="error__message__certificate error__message__certificate--reg">{errors.message}</p>
                            )}
                        </div>
                        <div className="certificate_radio_input">
                            <p>{mainLang.send}</p>
                            <div
                                role="group"
                                aria-labelledby="my-radio-group">
                                <label>
                                    <Field
                                        className="radio_btn"
                                        type="radio"
                                        name="picked"
                                        value="email"
                                        checked
                                    />
                                    {mainLang.sendemail}
                                </label>
                                <label>
                                    <Field
                                        className="radio_btn"
                                        type="radio"
                                        name="picked"
                                        value="post" />
                                    {mainLang.sendpost}
                                </label>
                            </div>

                        </div>
                        <div className="certificate">
                            <h2>Email<span>*</span></h2>
                                    <input
                                        className=""
                                        placeholder=""
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                            {touched.email && errors.email && (
                                <p className="error__message__certificate error__message__certificate--reg">{errors.email}</p>
                            )}
                        </div>
                        {contextHolder}
                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="certificate_btn"
                            data-testid="button-submit"
                        >
                            <BtnIcon />
                            <p>
                                {mainLang.btn}
                            </p>
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.language.data,
    };
};

export default connect(mapStateToProps) (Certificate);