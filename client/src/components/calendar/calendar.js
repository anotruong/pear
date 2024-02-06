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
        <h3>
          {/* {months[currentDay.getMonth()]} {currentDay.getFullYear()} */}
          Calendar
        </h3>
        <div id="monthHandler">
          <div className='month-btn-container'>
            <button className='monthHandler-btn'>+</button>
          </div>
          {/* <div className='monthDisplay-container'> */}
            <h3 className='monthDisplay'>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h3> 
          {/* </div> */}
          <div className='month-btn-container'>
            <button className='monthHandler-btn'>+</button>
          </div>
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