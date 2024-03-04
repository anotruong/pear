import React from 'react';
import tempPic from '../../images/tempPP.png';
import { displayDate } from '../dateHandler';
import mockData from '../../mock-data.json';

const ProfileInvites = ({...arg}) => {
  const invite = arg.invite;

  // console.log(invite)
  const fontColor = arg.color;
  const date = displayDate(invite.date);
  const userId = invite.userId;
  const userAcc = mockData.accounts.filter(obj => obj.id === userId)[0];
  const name = userAcc.firstName + ' ' + userAcc.lastName[0];
  const time = arg.invite.time;

  const restId = invite.restId;
  const resturant = mockData.restaurants.filter(obj => obj.id === restId)[0];
  const restName = resturant.name;
  // console.log(time);

  return(
    <div id='currentEvent' >
      <div 
        className='upcoming-container'
        style={{
          background: `FFFAFA`,
          color: fontColor
        }}
      >
        <div className='upcoming-flex'>
        <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            <p id='fullName' >{name}.</p>
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
          {/* <div className='icon-container'>
            <img src={tempPic} className='miniProfileIcon'/>
            {/* <p id='fullName' >{userName}.</p> 
          </div> */}
        </div>
      </div>
    </div>
  )
};

export default ProfileInvites;