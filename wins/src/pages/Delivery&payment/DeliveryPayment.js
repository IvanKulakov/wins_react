import React from 'react';
import topImg from '../../assets/DeliveryPayment/91B0BDB5801.png'
import payImg from '../../assets/DeliveryPayment/pay.png'
import deliveryImg from '../../assets/DeliveryPayment/delivery.png'
import freeDelImg from '../../assets/DeliveryPayment/free_deliver.png'
import backImg from '../../assets/DeliveryPayment/Figure.png'
import './DeliveryPayment.scss'
import Header from "../../components/Header/Header";
import {connect} from "react-redux";

function DeliveryPayment ({ dispatch , language}) {
    let mainLang;
    const uk = {
        title1: "Способи оплати",
    };
    const ru = {
        title1: "Способы оплаты",
    };
    if(language === "uk"){
        mainLang = uk;
    }
    if(language === "ru"){
        mainLang = ru;
    }
    return(
        <div>
            <Header />

            <div className='wrapper'>
                <div className="dp_top_img_box">
                    <img src={ topImg }/>
                </div>
                <div className="dp_pay_box">
                    <img src={ payImg }/>
                    <div className="dp_content">
                        <h1>
                            {mainLang.title1}
                        </h1>
                        <div className="dp_pay_content_box">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                            </svg>
                            <p><span>Наложенний платіж</span> – тільки Новою поштою</p>
                        </div>
                        <div className="dp_pay_content_box">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                            </svg>
                            <p><span>Повна оплата</span>   – на Розрахунковий рахунок ФОП</p>
                        </div>
                        <p>
                            Після оформлення замовлення менеджер магазину зв’яжеться з Вами для уточнення інформації.
                        </p>
                    </div>
                </div>
                <div className="dp_delivery_box">
                    <div className="dp_content">
                        <h1>
                            Способи доставки
                        </h1>
                            <div className="dp_pay_content_box">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                                </svg>
                                <p><span>Нова пошта</span>  – доставка на відділення або поштомат.</p>
                            </div>
                                <p>
                                    <span>Зверніть увагу!</span> Термін зберігання посилки поштою – 7 робочих днів (за закінчення терміну посилка відправляється назад, без попередження).
                                </p>
                            <div className="dp_pay_content_box">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                                </svg>
                                <p><span>Укрпошта</span> – відправка на поштове відділення (тільки при умові повної оплати)</p>
                            </div>
                            <p>
                                Відправка замовлення протягом 1-2 робочих днів!
                            </p>
                            <p>
                                Доставка здійснюється по всій території України (окрім тимчасово окупованих територій)
                            </p>

                    </div>
                    <img src={ deliveryImg }/>
                </div>
                <div className="dp_pay_box">
                    <img src={ freeDelImg } />
                    <div className="dp_content">
                        <h1>Безкоштовна доставка</h1>
                        <p>При замовленні товару від <span>1000</span> грн – безкоштовна доставка <span>Укрпоштою</span>, або від <span>1500</span> грн –
                            <span>Новою поштою</span> . <br/>
                            Комісію за повернення коштів (при замовленні наложенним платежем) – сплачує клієнт.</p>
                    </div>
                </div>
                <div className="dp_delivery_box">
                    <div className="dp_content">
                        <h1>Умови повернення</h1>
                        <p>Повернення можливе протягом 14 днів після отримання (для товарів
                            належної якості).<br/>
                            Зворотна доставка товарів здійснюється за рахунок клієнта.<br/>
                            Відповідно до чинного законодавства, ви можете повернути товар належної
                            якості або обміняти його, якщо:
                        </p>
                        <div className="dp_pay_content_box">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                            </svg>
                            <p>
                                Товар не був у вжитку і не має слідів використання споживачем:
                                подряпин, сколів, потертостей, плям тощо;
                            </p>
                        </div>
                        <div className="dp_pay_content_box">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                            </svg>
                            <p>
                                Товар повністю укомплектований та збережена фабрична упаковка;
                            </p>
                        </div>
                        <div className="dp_pay_content_box">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                            </svg>
                            <p>
                                Збережено всі ярлики та заводське маркування;
                            </p>
                        </div>
                        <div className="dp_pay_content_box">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.46997" y="1.72003" width="8" height="8" rx="4" stroke="#3960FF" stroke-width="2"/>
                        </svg>
                        <p>
                            Товар зберігає товарний вигляд та свої споживчі властивості.
                        </p>
                        </div>

                    </div>
                    <img src={ backImg } />
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

export default connect(mapStateToProps) (DeliveryPayment);