import {action, observable, reaction, toJS} from "mobx";

const store = observable({
  tariffs: [],
  date: new Date(),
});

const actions = {
  setTariffs: action((tariffs) => {
    store.tariffs = tariffs;
  }),

  setDate: action((date) => {
    store.date = date;
  }),
};

export {store, actions};
