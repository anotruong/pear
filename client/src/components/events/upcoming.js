import React from 'react';

import ClockIcon from '../../images/clockIcon.png';
import LocationIcon from '../../images/locationIcon.png';
import tempPic from '../../images/tempPP.png';

const UpcomingEvent = () => {

  return (
    <div 
      id='currentEvent' 
      // className='event-container'
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
            <p id='mealTime' className='infoText'>Dinner with Minnie S.</p>
            {/* clock icon */}
            <p id='schduledTime' className='infoText'>
              <img src={ClockIcon} className='littleIcon'/>
              12pm-4pm
            </p>
            {/* map icon */}
            <p id='meetUpSpot' className='infoText'>
                <img src={LocationIcon} className='littleIcon'/>
                Bestia
            </p>
          </div>
          <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >Minnie S.</p>
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
              chat
            </button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default UpcomingEvent;