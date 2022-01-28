import moment from 'moment';
import React from 'react';
import {inject, observer} from "mobx-react";

const SelectedDate = inject('store')(observer(({store}) => {

  const {date} = store;

  function nearestDayOfWeek(date) {

      function compareWithNearDay(date, daysOffset) {
          return moment(date).isSame(moment().add(daysOffset, 'day'), 'day');
      }

      if (!!!date) return '';

      if (compareWithNearDay(date, 0)) return 'сегодня, ';
      if (compareWithNearDay(date, 1)) return 'завтра, ';
      if (compareWithNearDay(date, 2)) return 'послезавтра, ';

      return '';
  }

  return (
    <div className="ticket">
      <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M2 0C0.895431 0 0 0.89543 0 2V3.85623C0 4.35784 0.208859 4.8368 0.576433 5.17812C1.34501 5.8918 1.34501 7.1082 0.576433 7.82188C0.208859 8.1632 0 8.64216 0 9.14377V11C0 12.1046 0.89543 13 2 13H19C20.1046 13 21 12.1046 21 11V9.06396C21 8.60661 20.8433 8.16307 20.5559 7.80728L20.515 7.75667C19.9228 7.02353 19.9228 5.97647 20.515 5.24333L20.5559 5.19272C20.8433 4.83693 21 4.39339 21 3.93604V2C21 0.895431 20.1046 0 19 0H2ZM5 3H16V10H5V3ZM4 2H5H16H17V3V10V11H16H5H4V10V3V2Z"
              fill="#28477C"/>
      </svg>
      <span className="md_txt">
        билет на {nearestDayOfWeek(date)}{date.format('DD.MM.yyyy')} ({date.toDate().toLocaleString('ru-RU', {weekday: 'long'})})
      </span>
    </div>
  );
}));

export {SelectedDate};
