import React from 'react';

import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';
import { categorizeMeal, displayDate } from '../dateHandler';
import mockData from '../../mock-data.json';


import './events.css';

const UpcomingEvent = (obj) => {
  // console.log(obj.value)

  let inviteObj = obj.value;
  // console.log(obj.value[0])

  const date = displayDate(inviteObj.date);
  // console.log(date)
  const time = inviteObj.time;

 //There are two userId variables, 'userId1' and 'userId2' respectively. 'userId1' references the acc that is logged in, and 'userId2' is the other party that is being invited. 
  const user2 = mockData.accounts.filter(acc => acc.id === inviteObj.userId2)[0];
  // console.log(user2)

  const firstName = user2.firstName.slice(0, 1).toUpperCase() + user2.firstName.slice(1);
  const lastIntial = user2.lastName.slice(0, 1).toUpperCase();
  const lastName = lastIntial + user2.lastName.slice(1);

  // console.log(userName)
  const meal = categorizeMeal(inviteObj.time)

  const restaurant = mockData.restaurants.filter(acc => acc.id === inviteObj.restId)[0];
  // console.log(restaurant)
  const restName = restaurant.name;

  const fontColor = '000000';

  return (
    <div 
      id='pendingEvent' 
    >
    {/* Icon on the left */}
      <div 
        // className='miniProfile-container'
        className='event-container'
        style={{background: `FFFAFA`}}
      >
        <div 
          // className='miniProfile-flex'
          className='event-flex'
        >
          <div className='info-flex' >
            <p id='mealTime' className='infoText'>{meal} with {firstName} {lastIntial}.</p>
            {/* clock icon */}
            <p id='schduledTime' className='infoText'>
              <img src={ClockIcon} className='littleIcon'/>
              {time}
            </p>
            {/* map icon */}
            <p id='meetUpSpot' className='infoText'>
                <img src={LocationIcon} className='littleIcon'/>
                {restName}
            </p>
          </div>
          <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >{firstName} {lastName}</p>
          </div>
        </div>
        <div className="button-flex">
          <div className='btn-container'>
            <button 
              id='border-btn' 
              className='duo-btn'
            >
              Change
            </button>
          </div>
          <div className='btn-container'>
            <button 
              id='gradient-btn' 
              className='duo-btn'
            >
              Chat
            </button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default UpcomingEvent;