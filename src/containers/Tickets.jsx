import React, {useEffect} from 'react';
import {appApi} from "../lib/state";
import {inject, observer} from 'mobx-react';
import {actions} from "../lib/store";
import {SessionCard} from "../components/SessionCard";
import {TariffType} from '../lib/tariffType';

const Tickets = inject('store')(observer(({store}) => {
  const {tariffs} = store;

  useEffect(() => {
    requestRules();
  }, [store.date]);

  const requestRules = () => {
    appApi.requestServiceRulesByDate(store.date.toDate(), (data) => {
      actions.setSessions(data)
    })
  };

  const simpleTariffsFilter = (tariff) =>  tariff.type !== TariffType.PREMIUM;

  return (
    <div className="ticket_grid">
      {tariffs.filter(simpleTariffsFilter).map(tariff => (
        <SessionCard key={tariff.name} tariff={tariff}/>
      ))}
    </div>
  );
}));

export {Tickets};
