import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css'
import {inject, observer} from "mobx-react";
import {observable} from "mobx";
import {CalendarButton} from "./CalendarButton";
import {actions} from "../lib/store";

const DateSelector = inject('store')(observer((store) => {
  const {date} = store;

  return (
    <DatePicker
      selected={date}
      onChange={actions.setDate}
      customInput={<CalendarButton/>}
    />
  );
}));

export {DateSelector};
