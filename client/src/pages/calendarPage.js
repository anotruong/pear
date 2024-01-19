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
        <div className='cal-container'>
          <h2>Calendar</h2>
          <Calendar />
        </div>
        <MonthlyNotes />
        <NaviBar />
      </div>

    </div>
  )
};

export default CalendarPage;