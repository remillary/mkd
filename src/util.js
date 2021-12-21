import {toJS} from "mobx";

export const getTariffById = (id, tariffs) => {
  console.log(id);
  console.log(tariffs.find(t => t.id === 4));
  return tariffs.find(t => t.id === id);
};
