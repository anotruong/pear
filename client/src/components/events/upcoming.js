import React from 'react';

import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';
import { categorizeMeal, displayDate } from '../dateHandler';
import mockData from '../../mock-data.json';


import './events.css';

const UpcomingEvent = (obj) => {

  let inviteObj = obj.value[0];
  // console.log(obj.value[0])

  const date = displayDate(inviteObj.date);
  // console.log(date)
  const time = inviteObj.time;
  const user = mockData.accounts.filter(acc => acc.id === inviteObj.userId)[0];
  // console.log(user)

  const userName = `${user.firstName} ${user.lastName.slice(0,1)}`

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
            <p id='mealTime' className='infoText'>{meal} with {user.firstName}</p>
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
            <p id='fullName' >{user.firstName} {user.lastName}</p>
          </div>
        </div>
        <div className="button-flex">
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
              Confirm
            </button>
          </div>
        </div> 
      </div>
    </div>

  //   <div id='currentEvent' >
  //     <div 
  //       // className='miniProfile-container'
  //       className='upcoming-container'
  //       style={{
  //         background: `FFFAFA`,
  //         color: fontColor
  //       }}
  //     >
  //       <div className='upcoming-flex'>

  //         <div className='info-flex' >
  //           <p id='mealDate' className='infoText'>
  //             {date}
  //           </p>
  //           <p id='schduledTime'className='infoText'>
  //             {time}
  //           </p>
  //           <p id='meetUpSpot'  className='infoText'>
  //             @ {restName}
  //           </p>
  //         </div>
  //         <div className='icon-container'>
  //           <img src={tempPic} className='miniProfileIcon'/>
  //           <p id='fullName' >{userName}.</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  )
}

export default UpcomingEvent;