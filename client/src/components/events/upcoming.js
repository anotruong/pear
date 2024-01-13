import React from 'react';

import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';
import { displayDate } from '../dateHandler';
import mockData from '../../mock-data.json';

import './events.css';

const UpcomingEvent = ({invites}) => {

  console.log(invites)

  const date = displayDate(invites.date);
  const user = mockData.accounts.filter(acc => acc.id === invites.userId)[0];

  const userName = `${user.firstName} ${user.lastName.slice(0,1)}`

  console.log(userName)

  const restaurant = mockData.restaurants.filter(obj => obj.id === invites.restId)[0];
  // console.log(restaurant)
  const restName = restaurant.name;
  return (
    <div 
      id='currentEvent' 
      // className='event-container'
    >
    {/* Icon on the left */}
      <div 
        // className='miniProfile-container'
        className='upcoming-container'
        style={{background: `FFFAFA`}}
      >
        <div 
          // className='miniProfile-flex'
          className='upcoming-flex'
        >
          <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >{userName}.</p>
          </div>
          <div className='info-flex' >
            <p 
              id='mealDate' className='infoText'
            >
              {date}
            </p>
            {/* clock icon */}
            <p 
              id='schduledTime'          className='infoText'
            >
              <img 
                src={ClockIcon}  className='littleIcon'
              />
              {invites.time}
            </p>
            {/* map icon */}
            <p 
              id='meetUpSpot'  className='infoText'
            >
                <img src={LocationIcon} className='littleIcon'/>
                {restName}
            </p>
          </div>
          {/* <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >Minnie S.</p>
          </div> */}
        </div>
        {/* <div className="button-flex">
          <div className='btn-container'>
            <button 
              id='border-btn' 
              className='duo-btn'
            >
              Cancel
            </button>
          </div>
          <div className='btn-container'>
            <button 
              id='gradient-btn' 
              className='duo-btn'
            >
              chat
            </button>
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default UpcomingEvent;