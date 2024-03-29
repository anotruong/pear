import React, { 
  Component, 
  useContext, 
  useState 
} from 'react';
import { appContext } from '../../hook/appContext';

import CalendarDays from './calendar-days';
import leftArr from '../../images/arrow-left-btn.png';
import rightArr from '../../images/arrow-right-btn.png';
import '../stylesheets/calendar.css';

const Calendar = () => {
  const [ currentDay, setCurrentDay] = useState(new Date());

  const weekdays = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];


  const { eventDisplay } = useContext(appContext);

  const bgGradient = 'linear-gradient(270deg, #FF6B8FE5, #FF8947)';
  
  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>
          {/* {months[currentDay.getMonth()]} {currentDay.getFullYear()} */}
          Calendar
        </h3>
        <div id="monthHandler">
          <div className='month-btn-container'>
            <button className='monthHandler-btn' style={{backgroundImage: `url(${leftArr})` }}></button>
          </div>
          {/* <div className='monthDisplay-container'> */}
            <h3 className='monthDisplay'>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h3> 
          {/* </div> */}
          <div className='month-btn-container'>
            <button className='monthHandler-btn'
            style={{backgroundImage: `url(${rightArr})`}}></button>
          </div>
        </div>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {
            weekdays.map((weekday, idx) => {
              const currentDay = new Date().getDay();
              // if the 'weekday' element matches the day of the current date, allow them permission to alter the background 
              const gradient = idx !== currentDay ? "transpartent": `${!eventDisplay ? 'transparent' : bgGradient}`;

              return <div 
                  className={"weekday " + weekday}
                  style={{background: `${gradient}`}}

                ><p id={weekday} className='weekday'>{weekday}</p></div>
            })
          }
        </div>
        {/* evaluate the if the days are less then the current date for border radius as well as if the position in the index is different. */}
        <CalendarDays 
          key={''}
          day={currentDay} 
          // changeCurrentDay={this.changeCurrentDay} 
        />
      </div>
    </div>
  )
};

export default Calendar;