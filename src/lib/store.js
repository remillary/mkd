import {action, observable, reaction, toJS} from "mobx";

const store = observable({
  tariffs: [],
  date: new Date(),
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
    tariffId = Number(tariffId);
    store.cart[tariffId] = (store.cart[tariffId] == null ? 0 : store.cart[tariffId]) + 1;
  }),

  removeFromCart: action((tariffId) => {
    tariffId = Number(tariffId);
    if (!store.cart[tariffId]) {
      store.cart[tariffId] = null;
      return;
    }
    store.cart[tariffId] = store.cart[tariffId] - 1;
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
