import {action, observable, reaction, toJS} from "mobx";
import moment from "moment";

const store = observable({
  tariffs: [],
  date: moment(),
  cart: {}
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
    store.cart = {};
  })
};

reaction(() => store.tariffs, () => {
  console.log('tariffs were changed', toJS(store.tariffs));
});

reaction(() => store.date, () => {
  console.log('date was changed', toJS(store.date));
});

export {store, actions};
