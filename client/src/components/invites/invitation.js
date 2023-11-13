import React, { useState } from 'react';
import tempPic from '../../images/tempPP.png';

const Invitation = ({acc}) => {
  const [ divState, setDivState ] = useState(true);
  
  return (
    <div 
      className='profile-container'
      style={{background: `${!divState ? "#FFF1F1" : "#FFFAFA"}`}}>
      <div className='profile-flex'>
        <div className='icon-container'>
          <img src={tempPic} className='profileIcon'/>
          <p className='fullName'>{acc.firstName} {acc.lastName.substring(0, 1)}.</p>
        </div>
        <div 
          className='availability-container'
          onClick={() => setDivState(!divState)}
        >
          <p className='date'>Thursday, October 24th, 2024</p>
          <p className='time'>12pm-4pm</p>
          <ul 
            hidden={divState}
            >
            <li>{acc.personality}</li>
            <li>{acc.diet}</li>
            <li>{acc.alcohol}</li>
          </ul>
        </div>
      </div>
      <div className="button-flex">
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button 
          id='newTime-btn' className='invite-btn'>Propose new time</button>
        </div>
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button id='request-btn' className='invite-btn'>request</button>
        </div>
      </div>
    </div>
    )
  };

export default Invitation;