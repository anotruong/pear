import React, { useContext, useState } from 'react';
import { appContext } from '../hook/appContext';
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
  
  // highlight 'weekday friday' to change 'background' value.
  // const [ friState, setFriState ] = useState(false);
  const { eventDisplay, setEventDisplay } = useContext(appContext)

  return (
    // <appContext.Provider value={{
    //  eventDisplay, setFriState
    // }}>
      <div id='calendarPage-container'>
        <div id='calendarPage-flex'>
          <div className='cal-container'>
            <Calendar />
          </div>
          <div className='notes-header'>
            <h3>{eventDisplay ? "Today's events" :"This month at a glance"}:</h3>
          </div>
          <MonthlyNotes />
          <div className='calNavi-page'>
            {/* 'NaviBar' is a child of 'calNavi-page' so it has a white background for `NaviBar'. 
            May intergrate the parent div into `NaviBar` later. */}
            <NaviBar />
          </div>
        </div>
      </div>
    // </appContext.Provider>
  )
};

export default CalendarPage;