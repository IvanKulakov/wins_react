import React, {useEffect} from "react";
import {NavLink} from "react-router";
import "./Contacts.scss"
import {ReactComponent as Tel} from "../../assets/Contacts/tel.svg"
import {ReactComponent as Viber} from "../../assets/Contacts/viber.svg"
import {ReactComponent as Telega} from "../../assets/Contacts/telega.svg";
import {ReactComponent as Whatsapp} from "../../assets/Contacts/whatsup.svg";
import {ReactComponent as Facebook} from "../../assets/Contacts/facebook.svg";
import {ReactComponent as Insta} from "../../assets/Contacts/insta.svg";
import {ReactComponent as Location} from "../../assets/Contacts/locator.svg";
import {connect} from "react-redux";
import {languageOperations} from "../../store/language";



function ContactsInput ({ dispatch, language }) {
    const uk = {
        inpTitle: "НАПИСАТИ НАМ",
        inpLabel1: "І'мя",
        inpLabel2: "Телефон",
        inpLabel3: "Повідомлення",
        btn: "ВІДПРАВИТИ",

        contTitle: "КОНТАКТИ",
        timep1: "Інтернет-магазин",
        timep2: "Графік роботи:",
        timep3: "Понеділок - П’ятниця 08:00 - 20:00,",
        timep4: "Субота 12:00 - 15:00, Неділя – вихідний",
    }
    const ru = {
        inpTitle: "НАПИСАТЬ НАМ",
        inpLabel1: "Имя",
        inpLabel2: "Телефон",
        inpLabel3: "Сообщение",
        btn: "ОТПРАВИТЬ",

        contTitle: "КОНТАКТЫ",
        timep1: "Интернет-магазин",
        timep2: "График работы:",
        timep3: "Понедельник - пятница 08:00 - 20:00,",
        timep4: "Суббота 12:00 - 15:00, Воскресенье – выходной",
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

    return(
        <div className="wrapper">
            <div className="contact_block">
                <div className="contacts_input_block">
                    <div className="contacts_input_title">
                        <p>{mainLang.inpTitle}</p>
                        <div></div>
                    </div>
                    <form>
                        <div className="contacts_input_top_block">
                            <div className="contacts_input_top">
                                <p className="contacts_input_label">{mainLang.inpLabel1}</p>
                                <input
                                    type="text"
                                    className="contacts_input_top_box"
                                />
                            </div>
                            <div className="contacts_input_top">
                                <p className="contacts_input_label">{mainLang.inpLabel2}</p>
                                <input
                                    type="tel"
                                    className="contacts_input_top_box"
                                />
                            </div>
                        </div>
                        <div className="contacts_input_box">
                            <p className="contacts_input_label">{mainLang.inpLabel3}</p>
                            <input
                                type="text"
                                className="contacts_input"
                            />
                        </div>
                    </form>
                    <button className="contacts_input_btn">{mainLang.btn}</button>
                </div>
                <div className="contacts_block">
                    <div className="contacts_input_title">
                        <p>{mainLang.contTitle}</p>
                        <div></div>
                    </div>
                    <div className="contacts_tel_block">
                        <Tel />
                        <div>
                            <p><span>Телефон: </span> +38 (093) 987 31 51</p>
                            <p><span>Email: </span> youarebeautiful@hitomi.com.ua</p>
                        </div>
                    </div>
                    <div className="contacts_block_icon">
                    <NavLink target="_blank" to={'viber://chat?number=+________'}>
                        <div className="contacts_icon">
                            <Viber />
                        </div>
                    </NavLink>
                    <NavLink target="_blank" to={'https://t.me/____'}>
                        <div className="contacts_icon">
                            <Telega />
                        </div>
                    </NavLink>
                    <NavLink target="_blank" to={'https://api.whatsapp.com/send?phone=3_______'}>
                        <div className="contacts_icon">
                            <Whatsapp />
                        </div>
                    </NavLink>
                    <NavLink target="_blank" to={"/"}>
                        <div className="contacts_icon">
                            <Facebook />
                        </div>
                    </NavLink>
                    <NavLink target="_blank" to={"/"}>
                        <div className="contacts_icon">
                            <Insta />
                        </div>
                    </NavLink>
                </div>
                    <div className="contacts_time_block">
                        <Location />
                        <div>
                            <p><span>{mainLang.timep1}</span></p>
                            <p><span>{mainLang.timep2}</span></p>
                            <p>{mainLang.timep3}</p>
                            <p>{mainLang.timep4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language.data,
    };
};

export default connect(mapStateToProps) (ContactsInput);