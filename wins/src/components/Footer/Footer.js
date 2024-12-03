import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo.png'


function Footer() {
    return(
        <div>
            <div className="footer_background">
            <div className="wrapper footer_pos">
                <div>
                    <img src={ logo }/>
                    <p className="time_title">Время работы:</p>
                    <p className="time_p">Пн - Пт с 10:00 - 20:00 <br/>Сб - Вс выходной.</p>
                </div>
                <div>
                    <h1 className="footer_item_title">Информация:</h1>
                    <p className="footer_item_p">О нас</p>
                    <p className="footer_item_p">Каталог</p>
                    <p className="footer_item_p">Оплата та доставка</p>
                    <p className="footer_item_p">Обмін та повернення</p>
                    <p className="footer_item_p">Договор оферты</p>
                    <p className="footer_item_p">Отзывы о магазине</p>
                </div>
                <div>
                    <h1 className="footer_item_title">Контакты:</h1>
                    <p className="footer_item_p">Тел:</p>
                    <p className="footer_item_title">+38 (093) 987-31-51;</p>
                    <p className="footer_item_p">E-mail:</p>
                    <p>info@constant-delight.com.ua</p>
                </div>
                <div>
                    <h1 className="footer_item_title">Месседжеры</h1>
                    <h1 className="footer_item_title">Социальные сети</h1>
                </div>
            </div>
            <div className="wrapper footer_bottom">
                <p>
                    Интернет-магазин WINS TM используется на основании лицензии правообладателя.
                </p>
            </div>
            </div>

        </div>
    )
}

export default Footer;