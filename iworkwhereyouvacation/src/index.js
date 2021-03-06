import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar.js';
import Carousel from "./components/carousel.js";
import MyCalendar from "./components/calendar.js"
import CalendarModal from "./components/calendarModal.js"

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Carousel />
    <MyCalendar />
    <CalendarModal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
