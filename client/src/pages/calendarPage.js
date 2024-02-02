import React from 'react';
// import Calendar from 'react-calendar';
import Calendar from '../components/calendar/calendar';
import NaviBar from '../components/naviBar';

import 'react-calendar/dist/Calendar.css';
import './stylesheets/calendarPage.css';
import MonthlyNotes from '../components/monthlyNotes';

const CalendarPage = () => {

  /* 
    Libraries: 
      react-datetime-picker 

        - allows the uesr to choose dates which we can then push to google cal api,
        - use 'useState(new Date())' to set and update date chosen when creating a new event

    Framework:
      Supabase 
        - BaaS alternative to Firebase (google)
        - an all in one backend framework that implements a clean architecture for routing, to databases, to front end. 
        - Doesn't force the use to use a specific technology (aws, googlecloud etc... )

   */

  return (
    <div id='calendarPage-container'>
      <div id='calendarPage-flex'>
        <div className='cal-container'>
          {/* <h2>Calendar</h2> */}
          <Calendar />
        </div>
        <MonthlyNotes />
        <NaviBar />
      </div>

    </div>
  )
};

export default CalendarPage;