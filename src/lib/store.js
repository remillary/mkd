import {action, observable, observe, reaction, toJS} from "mobx";
import moment from "moment";
import {getTotalPrice} from "../util";
import {groupSessions} from './sessionsGrouping';

const store = observable({
  tariffs: [],
  sessions: [],
  date: moment(),
  selection: {}, // currently selected sessions
  cart: {}, // sessions that was already added to cart
  total: 0,
  email: '',
  promo: '',
  payCheck: false,
  mkdCheck: false,
  formIsValid: false,
  formIsTouched: false,
});

const actions = {

  setSessions: action((sessions) => {
    store.sessions = sessions;
    store.tariffs = groupSessions(store.sessions);
  }),

  setDate: action((date) => {
    actions.clearCart();
    store.date = date;
  }),

  addToSelection: action((sessionId) => {
    store.selection[sessionId] = (store.selection[sessionId] || 0) + 1;
  }),

  removeFromSelection: action((sessionId) => {
    if (store.selection[sessionId] === 1) delete store.selection[sessionId];
    else if (store.selection[sessionId] > 1) store.selection[sessionId]--;
  }),

  syncSelectionAndCart: action((oneWaySessionId, roundTripSessionId) => {
    const updateOrUpdate = (key) => {
      if (store.selection[key]) store.cart[key] = store.selection[key]
      else delete store.cart[key];
    }

    updateOrUpdate(oneWaySessionId);
    updateOrUpdate(roundTripSessionId);
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
  store.total = getTotalPrice(store.cart, store.sessions);
});

export {store, actions};
