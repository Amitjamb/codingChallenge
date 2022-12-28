import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Date</label>
      <DatePicker className="form-control" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
    </div>
  );
};

export default DatePickerComponent;