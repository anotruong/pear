import React from 'react';
import mockData from '../../mock-data.json';
import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';
import Cancellation from '../confirmation/cancellation';
import { displayDate, categorizeMeal } from '../dateHandler';

const PendingEvent = (obj) => {
  const acc = obj.value;

  const accInfo = mockData.accounts.filter(obj => obj.id === acc.userId)[0];
  const firstName = accInfo.firstName.slice(0, 1).toUpperCase() + accInfo.firstName.slice(1);
  const lastIntial = accInfo.lastName.slice(0, 1).toUpperCase();
  const lastName = lastIntial + accInfo.lastName.slice(1);
  const name = firstName + ' ' + lastName;
  console.log(accInfo)
  const restId = acc.restId;
  const restInfo = mockData.restaurants.filter(obj => obj.id === restId)[0];
  const restName = restInfo.name;
  console.log(restInfo)
  const meal = categorizeMeal(acc.date);
  const time = acc.time;


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
          <p id='fullName' >{name}.</p>
        </div>
      </div>
      <div className="button-flex">
        <div className='btn-container'>
          <button 
            id='border-btn' 
            className='duo-btn'
          >
            Reject
          </button>
        </div>
        <div className='btn-container'>
          <button 
            id='gradient-btn' 
            className='duo-btn'
          >
            Confirm
          </button>
        </div>
      </div> 
    </div>
  </div>
  )
}

export default PendingEvent;