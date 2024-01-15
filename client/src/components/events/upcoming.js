import React from 'react';

import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';
import { displayDate } from '../dateHandler';
import mockData from '../../mock-data.json';

import './events.css';

const UpcomingEvent = ({...arg}) => {

  // console.log(arg)

  const date = displayDate(arg.invite.date);
  const time = arg.invite.time;
  const user = mockData.accounts.filter(acc => acc.id === arg.invite.userId)[0];

  const userName = `${user.firstName} ${user.lastName.slice(0,1)}`

  // console.log(userName)

  const restaurant = mockData.restaurants.filter(acc => acc.id === arg.invite.restId)[0];
  // console.log(restaurant)
  const restName = restaurant.name;

  const fontColor = arg.color;

  return (
    <div id='currentEvent' >
      <div 
        // className='miniProfile-container'
        className='upcoming-container'
        style={{
          background: `FFFAFA`,
          color: fontColor}}
      >
        <div className='upcoming-flex'>
          <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >{userName}.</p>
          </div>
          <div className='info-flex' >
            <p id='mealDate' className='infoText'>
              {date}
            </p>
            <p id='schduledTime'className='infoText'>
              {time}
            </p>
            <p id='meetUpSpot'  className='infoText'>
              @ {restName}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent;