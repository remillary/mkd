import {action, observable, observe, reaction, toJS} from "mobx";
import moment from "moment";
import {getTotalPrice} from "../util";

const store = observable({
  tariffs: [],
  date: moment(),
  cart: {},
  total: 0,
  email: '',
  promo: '',
  payCheck: false,
  mkdCheck: false,
  formIsValid: false,
  formIsTouched: false,
});

const actions = {
  setTariffs: action((tariffs) => {
    store.tariffs = tariffs;
  }),

  setDate: action((date) => {
    actions.clearCart();
    store.date = date;
  }),

  addToCart: action((tariffId) => {
    store.cart[tariffId] = (store.cart[tariffId] == null ? 0 : store.cart[tariffId]) + 1;
  }),

  removeFromCart: action((tariffId) => {
    let cartElement = store.cart[tariffId];
    if (!cartElement) {
      return;
    }
    store.cart[tariffId] = cartElement - 1;
    if (store.cart[tariffId] === 0) {
      delete store.cart[tariffId];
    }
  }),

  removeWholeFromCart: action((tariffId) => {
    delete store.cart[tariffId];
  }),

  clearCart: action(() => {
    for (const item in store.cart) {
      delete store.cart[item];
    }
  }),

  setEmail: action((email) => {
    store.email = email;
  }),
  setPromo: action((promo) => {
    store.promo = promo;
  }),
  setPayCheck: action((payCheck) => {
    store.payCheck = payCheck;
  }),
  setMkdCheck: action((mkdCheck) => {
    store.mkdCheck = mkdCheck;
  }),
  setFormIsValid: action((isValid) => {
    store.formIsValid = isValid;
  }),
  setFormIsTouched: action((isTouched) => {
    store.formIsTouched = isTouched;
  })
};

reaction(() => store.tariffs, () => {
  console.log('tariffs were changed', toJS(store.tariffs));
});

reaction(() => store.date, () => {
  console.log('date was changed', toJS(store.date));
});

reaction(() => (store.email + store.payCheck + store.mkdCheck), () => {
  actions.setFormIsTouched(true);
  console.log('touch')
  let errors = 0;
  if (store.email.trim().length === 0) {
    errors++;
  }
  if (!store.payCheck || !store.mkdCheck) {
    errors++;
  }
  actions.setFormIsValid(errors === 0);
});

observe(store.cart, () => {
  store.total = getTotalPrice(store.cart, store.tariffs);
});

export {store, actions};
