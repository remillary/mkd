import {inject, observer} from "mobx-react";

const Footer = inject('store')(observer(({store}) => {
  const {formIsValid} = store;

  return (
    <footer className="footer">
      <button
        className="pay_btn"
        disabled={!formIsValid}
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
