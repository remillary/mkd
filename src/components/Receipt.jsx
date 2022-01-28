import React from 'react';
import {inject, observer} from "mobx-react";
import {getTariffById} from "../util";
import {actions} from "../lib/store";

const Receipt = inject('store')(observer(({store}) => {
  const {cart, tariffs, date} = store;

  return (
    <div className="purchases">
      <div className="purchases_inner">
        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00146 0C3.13497 0 0 2.87058 0 6.41174C0 8.22332 1.92768 11.4688 1.92768 11.4688L6.74338 19L11.768 11.5568C11.768 11.5568 14 8.46015 14 6.41174C14.0006 2.87058 10.8662 0 7.00146 0ZM6.96869 9.94318C4.75425 9.94318 2.96058 8.28967 2.96058 6.24612C2.96058 4.20526 4.75367 2.55283 6.96869 2.55283C9.18196 2.55283 10.9774 4.20526 10.9774 6.24612C10.9774 8.28967 9.18196 9.94318 6.96869 9.94318Z"
            fill="#28477C"/>
        </svg>
        <span>Московская канатная дорога</span>
      </div>
      <div className="purchases_inner">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_364:599)">
            <path
              d="M0.526515 13.7463H14.3084C14.432 13.7463 14.5515 13.703 14.6462 13.6242C14.7786 13.5133 17.7982 10.9157 17.9823 5.30838H3.18086C2.99744 10.3983 0.216528 12.7907 0.187628 12.8146C0.0182026 12.9578 -0.0441322 13.1916 0.03209 13.3997C0.107785 13.6072 0.305055 13.7463 0.526515 13.7463Z"
              fill="#28477C"/>
            <path
              d="M17.4726 2.14418H14.8358V1.61681C14.8358 1.32149 14.6037 1.08945 14.3084 1.08945C14.0131 1.08945 13.781 1.32149 13.781 1.61681V2.14418H11.109V1.61681C11.109 1.32149 10.877 1.08945 10.5817 1.08945C10.2864 1.08945 10.0543 1.32149 10.0543 1.61681V2.14418H7.41747V1.61681C7.41747 1.32149 7.18543 1.08945 6.8901 1.08945C6.59478 1.08945 6.36274 1.32149 6.36274 1.61681V2.14418H3.7259C3.43057 2.14418 3.19853 2.37622 3.19853 2.67155V4.25365H18V2.67155C18 2.37622 17.7679 2.14418 17.4726 2.14418Z"
              fill="#28477C"/>
            <path
              d="M15.3234 14.4328C15.0371 14.6712 14.6776 14.801 14.3084 14.801H3.19849V16.3831C3.19849 16.6746 3.43436 16.9105 3.72585 16.9105H17.4726C17.7641 16.9105 17.9999 16.6746 17.9999 16.3831V10.4715C16.9832 12.966 15.5643 14.2312 15.3234 14.4328Z"
              fill="#28477C"/>
          </g>
          <defs>
            <clipPath id="clip0_364:599">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>{date.format('DD.MM.yyyy')}</span>
      </div>
      {Object.keys(cart) > 0 && (
        <div className="purchases_inner">
          <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2 0C0.895431 0 0 0.89543 0 2V3.85623C0 4.35784 0.208859 4.8368 0.576433 5.17812C1.34501 5.8918 1.34501 7.1082 0.576433 7.82188C0.208859 8.1632 0 8.64216 0 9.14377V11C0 12.1046 0.89543 13 2 13H19C20.1046 13 21 12.1046 21 11V9.06396C21 8.60661 20.8433 8.16307 20.5559 7.80728L20.515 7.75667C19.9228 7.02353 19.9228 5.97647 20.515 5.24333L20.5559 5.19272C20.8433 4.83693 21 4.39339 21 3.93604V2C21 0.895431 20.1046 0 19 0H2ZM5 3H16V10H5V3ZM4 2H5H16H17V3V10V11H16H5H4V10V3V2Z"
                  fill="#28477C"/>
          </svg>
          <span>Билет</span>
        </div>
      )}
      {Object.entries(cart).map((entry) => {
        const [id, count] = entry;
        const tariff = getTariffById(id, tariffs);
        return tariff && (<CartItem
          key={id}
          title={tariff.name}
          price={tariff.price}
          count={count}
          onRemove={() => {
            actions.removeWholeFromCart(id);
          }}
        />)
      })}
    </div>
  );
}));

const CartItem = (props) => {
  const {
    title,
    price,
    count,
    onRemove
  } = props;

  return (
    <div className="purchases_block">
      <div className="purchases_block_inner">
        <span className="purchases_number">{count}</span>
        <div className="purchases_txt">
          <span>{title}</span>
          <span>{price}</span>
        </div>
      </div>
      <button className="purchases_close" onClick={onRemove}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.94975 14.8488L14.8492 4.94926" stroke="#313539" strokeWidth="2"
                strokeLinecap="round"/>
          <path d="M14.8492 14.8488L4.94975 4.94926" stroke="#313539" strokeWidth="2"
                strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
};

export {Receipt};
