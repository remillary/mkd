import {toJS} from "mobx";

export const getTariffById = (id, tariffs) => {
  return tariffs.find(t => Number(t.id) === Number(id));
};
