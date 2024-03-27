import React from 'react';
import tempPic from '../images/tempPP.png';
import NaviBar from '../naviBar';

import './stylesheets/cancellation.css';

const Cancellation = () => {

  // example of required confirmation state
  const firstName = 'Yoona';
  const lastIntial = 'K';
  const name = firstName + ' ' + lastIntial;
  const date = 'Thursday, Oct. 7th, 2021';
  const time = '12pm-2pm';
  const restName = 'Bestia';
  const area = 'downtown LA';
  const cancellation = 2;

  return (
    <div className="cancellation-container">
      <div className='cancellation-flex'>
        <div className='cancellation-header'>
          <h2>Cancellation Confirmed!</h2>
          <h4 id='subHeading'>Your meal with {name} has been cancelled</h4>
        </div>
        <div className='orangeIcon'>
          <img src={tempPic} className='pfp'/>
        </div>
        {/* <div className='apptInfo'>
          <p className='confirm date'>Scheduled for <b>{date} {time}</b></p>
          <p className='confirm location'><b>{restName}</b> ({area})</p>
        </div> */}
        {/* <div className='requestConBtn'>
          <div 
            className='btn-container request'
          >
            <button id='border-btn' className='duo-btn'>Chat</button>
          </div>
          <div 
            className='btn-container request'
          >
            <button 
            id='gradient-btn' className='duo-btn'>Connect</button>
          </div> 

        </div>*/}
        <div className='cancelInfo-container'>
          You have <b>{cancellation}</b> cancellations left this month
        </div>
        <div className='addedCal'>
        This event has been removed to your calendar.
        </div>
      </div>

      
      <NaviBar />
    </div>
  );
}

export default Cancellation;