import {inject, observer} from "mobx-react";
import {appApi} from "../lib/state";

const Footer = inject('store')(observer(({store}) => {
  const {
    formIsValid,
    total,
    email,
    promo,
    date,
    cart
  } = store;

  const onSubmit = () => {
    appApi.requestPlaceAnyAPIPromoCode(
      email,
      date.toDate(),
      cart,
      promo
    );
  }

  return (
    <footer className="footer">
      <button
        className="pay_btn"
        disabled={!formIsValid || total === 0}
        onClick={onSubmit}
      >
        Оплатить
      </button>
      <p className="pay_txt">Приобретая билет, Вы
        подтверждаете, что ознакомлены <br/>
        с правилами поведения на канатной
        дороге</p>
    </footer>
  );
}));

export {Footer};
