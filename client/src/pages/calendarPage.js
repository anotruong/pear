import React from 'react';
import Calendar from 'react-calendar';
import NaviBar from '../components/naviBar';

import 'react-calendar/dist/Calendar.css';
import './stylesheets/calendarPage.css';
import MonthlyNotes from '../components/monthlyNotes';

const CalendarPage = () => {


  return (
    <div id='calendarPage-container'>
      <div id='calendarPage-flex'>
        <h2>Calendar</h2>
        <Calendar />
        <MonthlyNotes />

      </div>
      <NaviBar />
    </div>
  )
};

export default CalendarPage;