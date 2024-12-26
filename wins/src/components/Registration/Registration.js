import React, {useEffect} from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import {useNavigate} from 'react-router';
import * as yup from 'yup';
import { PatternFormat  } from 'react-number-format';
import './Form.scss';
import './Registration.scss'
import {message} from "antd";
import {languageOperations} from "../../store/language";
import {connect} from "react-redux";

const Registration = ({ dispatch, language }) => {
    const uk ={
        title: "Створити акаунт",
        block1h2: "Особиста інформація",
        name: "Введіть ім’я*",
        lastname: "Введіть прізвище*",
        phone: "Введіть номер телефону",
        block2h2: "Інформація про обліковий запис ",
        email: "Введіть електронну пошту",
        password: "Введіть пароль",
        passwordConfirm: "Підтвердіть пароль",
        btn: "Створити обліковий запис",

        error1: "Вводьте рядком",
        error2: "Поле обов'язково для введення",
        error3: "Пароль занадто короткий - мінімум 8 символів.",
        error4: "Пароль може містити лише латинські літери",
        error5: "Паролі не збігаються",
        error6: "Введіть коректний email",
    }
    const ru = {
        title: "Создать аккаунт",
        block1h2: "Личная информация",
        name: "Введите имя*",
        lastname: "Введите фамилию*",
        phone: "Введите номер телефона",
        block2h2: "Информация об аккаунте ",
        email: "Введите электронную почту",
        password: "Введите пароль",
        passwordConfirm: "Подтвердите пароль",
        btn: "Создать аккаунт",

        error1: "Вводите строкой",
        error2: "Поле обязательно для ввода",
        error3: "Пароль слишком короткий — минимум 8 символов.",
        error4: "Пароль может содержать только латинские буквы",
        error5: "Пароли не совпадают",
        error6: "Введите корректный email",
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
  const validationSchema = yup.object().shape({
    name: yup
          .string()
          .typeError(`${mainLang.error1}`)
          .required(`${mainLang.error2}`),
    lastName: yup
          .string()
          .typeError(`${mainLang.error1}`)
          .required(`${mainLang.error2}`),
    telephone: yup
            .string()
            .required(`${mainLang.error2}`),
    password: yup
          .string()
          .min(8, `${mainLang.error3}`)
          .matches(/[a-zA-Z]/, `${mainLang.error4}`)
          .required(`${mainLang.error2}`),
    passwordConfirmation: yup
           .string()
           .oneOf([yup.ref('password'), null], `${mainLang.error5}`)
           .required(`${mainLang.error2}`),
    email:  yup
          .string()
          .email(`${mainLang.error6}`)
          .required(`${mainLang.error2}`),
  });
  const clearCart = async (data) => {
    const body = JSON.stringify(data);
    await axios({
      method: 'post',
      url: `/api/user/registration`,
      headers: { 'Content-Type': 'application/json' },
      data: body,
    })
      .then((response) => {
        if (response.status === 200)
            localStorage.setItem('token', JSON.stringify(response.data.token));

            // hist.push('/api/user/auth');
        message.success('Спасибо за регистрацию!', 2);
      })
      .catch((error) => {
        message.error(`${error.response.data.message}`, 2);
      });
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          telephone: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          clearCart(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className='wrapper registration_block'>
            <h1>{mainLang.title}</h1>
              <div className="registration_pos">
                  <div className="registration_box">
                      <h2>{mainLang.block1h2}</h2>
                      <div>
                          <input
                              placeholder={mainLang.name}
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                          />
                          {touched.name && errors.name && (
                              <p className="error__message error__message--reg">{errors.name}</p>
                          )}
                      </div>
                      <div>
                          <input
                              placeholder={mainLang.lastname}
                              type="text"
                              name="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                          />
                          {touched.lastName && errors.lastName && (
                              <p className="error__message error__message--reg">{errors.lastName}</p>
                          )}
                      </div>
                      <div>
                          <PatternFormat
                              format={"+38 (###) ### ## ##"}
                              prefix={`+38`}
                              mask="_"
                              placeholder={mainLang.phone}
                              type="telephone"
                              name="telephone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.telephone}
                          />
                          {touched.telephone && errors.telephone && (
                              <p className="error__message error__message--reg">{errors.telephone}</p>
                          )}
                      </div>
                  </div>
                  <div className="registration_box">
                      <h2>{mainLang.block2h2}</h2>
                      <div>
                          <input
                              placeholder={mainLang.email}
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                          />
                          {touched.email && errors.email && (
                              <p className="error__message error__message--reg">{errors.email}</p>
                          )}
                      </div>
                      <div>
                          <input
                              placeholder={mainLang.password}
                              type="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                          />
                          {touched.password && errors.password && (
                              <p className="error__message error__message--reg">{errors.password}</p>
                          )}
                      </div>
                      <div>
                          <input
                              placeholder={mainLang.passwordConfirm}
                              type="password"
                              name="passwordConfirmation"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.passwordConfirmation}
                          />
                          {touched.passwordConfirmation && errors.passwordConfirmation && (
                              <p className="error__message error__message--reg">{errors.passwordConfirmation}</p>
                          )}
                      </div>
                  </div>
              </div>
              <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
              className="registration_btn"
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
export default connect(mapStateToProps) (Registration);
