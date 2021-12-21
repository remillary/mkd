import React from 'react';
import {Cart} from "./Cart";

const Basket = () => {
  return (
    <div className="basket_wrapper">
      <h2 className="header_title">Корзина</h2>
      <div className="basket_block">

        <div className="basket_col">
          <span className="basket_txt">Мы высылаем электронный билет на телефон и электронную почту</span>
          <form action="#" className="basket_form">
            <p className="input_wrp"><input className="basket_input" type="text" name="email" id=""
                                            placeholder="E-MAIL" required/></p>
            <p className="input_wrp"><input className="basket_input" type="tel" name="phone" id=""
                                            placeholder="+7(_ _ _) _ _ _ -_ _-_ _" required/></p>
            <div className="input_group">
              <input className="rules_input" type="checkbox" id="rules_pay"/>
              <label className="rules_label" htmlFor="rules_pay">
                <p>Я согласен с <a className="rules_link" href="#">правилами оплаты</a></p>
              </label>
              <input className="rules_input" type="checkbox" id="rules_mkd"/>
              <label className="rules_label" htmlFor="rules_mkd">
                <p>Я согласен с <a className="rules_link" href="#">правилами МКД</a></p>
              </label>
            </div>
          </form>
          <a href="#" className="rules_link_lg">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.17196" y="2.80789" width="16.08" height="20.592" rx="3.4" stroke="#BD0F04"
                    strokeWidth="1.2"/>
              <mask id="path-2-inside-1_364:683" fill="white">
                <rect x="0.939941" width="16.5517" height="21.5173" rx="4"/>
              </mask>
              <rect x="0.939941" width="16.5517" height="21.5173" rx="4" fill="#28477C" stroke="#BD0F04"
                    strokeWidth="16.5517" mask="url(#path-2-inside-1_364:683)"/>
              <path d="M4.94061 7.39215H13.6766" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M4.94061 10.5471H13.6766" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M4.94061 13.8203H13.6766" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span>правила покупки и оплаты</span>
          </a>
          <label className="promocode" htmlFor="promocode">
            <span>Промокод:</span>
            <input className="basket_input promocode_input" type="text" id="promocode" placeholder="_ _ _ _ _ _"/>
          </label>
          <div className="total_price">
            <span>Итого:</span>
            <span>450₽</span>
          </div>
        </div>
        <Cart/>
        <div className="special_offer">
                  <span className="special_offer_title">
                     СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
                     ДЛЯ КУПИВШИХ БИЛЕТ НА
                     КАНАТНУЮ ДОРОГУ
                  </span>
          <div className="special_offer_partners">
            <img src="assets/img/logo1.png" alt="partner"/>
            <img src="assets/img/logo2.png" alt="partner" width="132" height="41"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export {Basket};
