import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css'
import {inject, observer} from "mobx-react";
import {CalendarButton} from "./CalendarButton";
import {actions} from "../lib/store";
import moment from "moment";

const DateSelector = inject('store')(observer((store) => {
  const {date} = store;

  const onChange = (date) => {
    actions.setDate(moment(date));
  }

  return (
    <div className="calendar">
      <DatePicker
        selected={date}
        onChange={onChange}
        customInput={<CalendarButton/>}
      />
    </div>
  );
}));

export {DateSelector};
