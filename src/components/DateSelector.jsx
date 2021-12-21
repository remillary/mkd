import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css'
import {inject, observer} from "mobx-react";
import {CalendarButton} from "./CalendarButton";
import {actions} from "../lib/store";

const DateSelector = inject('store')(observer((store) => {
  const {date} = store;

  return (
    <div className="calendar">
      <DatePicker
        selected={date}
        onChange={actions.setDate}
        customInput={<CalendarButton/>}
      />
    </div>
  );
}));

export {DateSelector};
