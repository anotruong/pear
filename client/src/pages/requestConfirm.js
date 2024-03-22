import React from 'react';
import tempPic from '../images/tempPP.png';
import NaviBar from '../components/naviBar';

import './stylesheets/requestConfirm.css';

const RequestConfirm = () => {
  return (
    <div className="requestConfirm-container">
      <div className='requestConfirm-flex'>
        <div className='requestConfirm-header'>
          <h3>Sweet!</h3>
          <h4>'username' accepted your request to eat together.</h4>
        </div>
        <div className='orangeIcon'>
          <img src={tempPic} className='pfp'/>
        </div>
        <div className='apptInfo'>
          Scheduled for Thursday, Oct. 7th, 2021
          12pm-2pm
          Bestia (downtown LA)
        </div>
        <div className='requestConBtn'>
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

        </div>
      </div>
      
      <NaviBar />
    </div>
  );
}

export default RequestConfirm;