import React, { Component, useState } from 'react';
import CalendarDays from './calendar-days';
import '../stylesheets/calendar.css';

const Calendar = () => {
  const [ currentDay, setCurrentDay] = useState(new Date());
  const weekdays = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  
  return (

    <div className="calendar">
      <div className="calendar-header">
        <h2>
          {/* {months[currentDay.getMonth()]} {currentDay.getFullYear()} */}
          Calendar
        </h2>
        <div id="monthHandler">
          <button className='monthHandler-btn'>+</button>
          <h3>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h3> 
          <button className='monthHandler-btn'>+</button>
        </div>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {
            weekdays.map((weekday) => {
              return <div className="weekday"><p>{weekday}</p></div>
            })
          }
        </div>
        <CalendarDays 
          day={currentDay} 
          // changeCurrentDay={this.changeCurrentDay} 
        />
      </div>
    </div>
  )
};

export default Calendar;