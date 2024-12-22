import React, {useEffect} from "react";
import {languageOperations} from "../../store/language";
import styles from "./Langswitch.module.scss"
import {connect} from "react-redux";

function Langswitch ({ dispatch, language }) {
    const active = styles.header_centre_lang_block_p_active
    const normal = styles.header_centre_lang_block_p
    useEffect(()=>{
        dispatch(languageOperations.getLanguage())

    }, [dispatch])
    const onClickUk = () =>{
        localStorage.setItem('language', JSON.stringify("uk"));
        dispatch(languageOperations.getLanguage())
    }
    const onClickRu = () =>{
        localStorage.setItem('language', JSON.stringify("ru"));
        dispatch(languageOperations.getLanguage())
    }

    return (
        <div className={styles.header_centre_lang_block}>
            <p
                className={language === "uk"? active : normal}
                onClick={onClickUk}
            >
                UA
            </p>
            <p
                className={language === "ru"? active : normal}
                onClick={onClickRu}
            >
                RU
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.language.data,
    };
};
export default connect(mapStateToProps) (Langswitch);