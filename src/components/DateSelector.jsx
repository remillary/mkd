import React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css'
import {inject, observer} from "mobx-react";
import {CalendarButton} from "./CalendarButton";
import {actions} from "../lib/store";
import moment from "moment";
import ru from 'date-fns/locale/ru'

const DateSelector = inject('store')(observer((store) => {
  const {date} = store;

  const onChange = (date) => {
    actions.setDate(moment(date));
  }

  registerLocale('ru-RU', ru);

  return (
    <div className="btn calendar">
      <DatePicker
        locale={'ru-RU'}
        selected={date}
        onChange={onChange}
        minDate={moment().toDate()}
        customInput={<CalendarButton/>}
      />
    </div>
  );
}));

export {DateSelector};
