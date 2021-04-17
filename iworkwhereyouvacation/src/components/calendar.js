import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="d-flex justify-content-center">
      <Calendar
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default MyCalendar;
