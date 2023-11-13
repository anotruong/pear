import React from 'react';
import './stylesheets/notes.css';

const MonthlyNotes = () => {

  const mockData = [
    {
      date: '07/01',
      time: '12pm - 2pm',
      itinerary: ': w/ aubrey'
    },
    {
      date: '07/05',
      time: '4pm-5pm',
      itinerary: 'dinner w/ janet'
    },
    {
      date: '07/08',
      time: '11pm-1pm',
      itinerary: 'lunch w/ shane'
    },
    {
      date: '07/11',
      time: '7pm-9pm',
      itinerary: 'dinner w/ michael'
    },
    {
      date: '07/11',
      time: '8pm-10pm',
      itinerary: 'dinner w/ haruka'
    },
    {
      date: '07/30',
      time: '7am-9pm',
      itinerary: 'breakfast w/ Agnes'
    },
  ];

  const mockList = mockData.map(obj => <li><b>{obj.date}:</b>  {obj.time} {obj.itinerary}</li>)

  return(
    <div className='notes-container'>
      <div className='notes'>
        <h3>This month at a glance:</h3>
        <ul>
          {mockList}
          {/* will iterate this and stylelize the information */}
        </ul>
      </div>
    </div>
  )
};

export default MonthlyNotes;