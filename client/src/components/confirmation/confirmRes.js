import React from 'react';
import { displayDate } from '../dateHandler';
import tempPic from '../../images/tempPP.png';
import NaviBar from '../naviBar';

import mockData from '../../mock-data.json';

import '../stylesheets/confirmation.css';

const confirmation = (confirmNum) => {

  // the value passed through the arg 'confirmNum' is a string that represents the confirmation number assigned between two users.
  const tempConfirmNumber = '8903';

  // ReservationInformation pulled from mockData

  const reservationInfo = mockData.pendingInvite.filter(obj => obj.id === tempConfirmNumber)[0];
  const date = displayDate(reservationInfo.date);
  const time = reservationInfo.time;
  // 'area' is not a feature created in mockData


  const restaurantId = reservationInfo.restId;
  const restaurantInfo = mockData.restaurants.filter(obj => obj.id === restaurantId)[0];

  console.log(restaurantInfo)
  // const date = 'Thursday, Oct. 7th, 2021';
  // const time = '12pm-2pm';
  const restName = restaurantInfo.name;
  // const area = 'downtown LA';
  console.log(reservationInfo)


  // information pulled between user inviter and invitees

  const user = reservationInfo.userId;
  const userInfo = mockData.accounts.filter(obj => obj.id === user)[0];
  console.log(userInfo);

  const firstName = userInfo.firstName.slice(0, 1).toUpperCase() + userInfo.firstName.slice(1);
  const lastIntial = userInfo.lastName.slice(0, 1).toUpperCase();
  const name = firstName + ' ' + lastIntial;

  
  const cancellation = 2;

  /* Connect btn
      -What does it do? The reservation between users have already been established.
  */
  return (
    <div className="confirmation-container">
      <div className='confirmation-flex'>
        <div className='closeOut-flex'>
          <div className='closeOut-btn'>
            <button id='closeOut' />
          </div>
        </div>
        <div className='confirmation-header'>
          <h2>Sweet!</h2>
          <h4 id='subHeading'>{name}. accepted your request to eat together.</h4>
        </div>
        <div className='orangeIcon'>
          <img src={tempPic} className='pfp'/>
        </div>
        <div className='apptInfo'>
          <p className='confirm date'>Scheduled for <b>{date} {time}</b></p>
          <p className='confirm location'><b>{restName}</b> {/*({area})*/} </p>
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
        <div className='cancelInfo-container'>
          You have <b>{cancellation}</b> cancellations left this month
        </div>
        <div className='addedCal'>
        This event has been added to your calendar.
        </div>
      </div>

      
      <NaviBar />
    </div>
  );
}

export default confirmation;