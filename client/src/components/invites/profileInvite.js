import React, { useContext, useState } from 'react';
import tempPic from '../../images/tempPP.png';
import { displayDate, categorizeMeal } from '../dateHandler';
import mockData from '../../mock-data.json';

import Cancellation from '../confirmation/cancellation';
import { appContext } from '../../hook/appContext';



const ProfileInvites = ({...arg}) => {
  // State for cancellation
  const { cancellationState, setCancellationState } = useContext(appContext);
  const { setCancelIdState } = useContext(appContext);
  // console.log(cancellationState)

  const [ picAlign, setPicAlign ] = useState(arg.picAlign); //if true, show left
  // const [ rightPic, setRightPic] = useState(arg.PicAlign); // if false, show right

  const invite = arg.invite;

  const fontColor = arg.color ? arg.color : "";
  const date = displayDate(invite.date); // arg is string type

  const meal = invite.meal;

  const userId = invite.userId;
  const userAcc = mockData.accounts.filter(obj => obj.id === userId)[0];
  const userName = userAcc.userName;
  const name = userAcc.firstName + ' ' + userAcc.lastName[0].toUpperCase() + '.';

  const title = meal ? `${meal} with ${name.slice(0,1).toUpperCase() + name.slice(1)}` : date;

  const time = invite.time;
  const restId = invite.restId;

  const restaurant = mockData.restaurants.filter(obj => obj.id == restId)[0];
  const restName = restaurant.name;

  return(
    <div id='currentEvent' >
      <div 
        className='upcoming-container'
        style={{
          background: `FFFAFA`,
          color: fontColor
        }}
      >
        <div className='upcoming-flex'
            style={{justifyContent: `${picAlign ? 'space-between' : 'flex-start'}`}}
         >
          <div className={`icon-container left ${picAlign ? "hidden" : ""}`} >
            <img src={tempPic} className='miniProfileIcon' 
            />
            <p id='fullName' >{name}</p>
          </div>
          <div className='info-flex' >
            <p id='mealDate' className='infoText'>
              {title}
            </p>
            <p id='schduledTime'className='infoText'>
              {time}
            </p>
            <p id='meetUpSpot'  className='infoText'>
              @ {restName}
            </p>
          </div>
          <div className={`icon-container right ${!picAlign ? "hidden" : ""}`}>
            <img src={tempPic} className='miniProfileIcon' 
            />
              <p id='fullName' >{userName}</p> 
          </div>

        </div>
        <div className={`button-flex right ${!picAlign ? "hidden" : ""}`} >
          <div 
            className='btn-container'
            // hidden={divState}
          >
            <button 
            // name={userId}
              id='border-btn'
              className='duo-btn'
              onClick={() => {
                setCancelIdState(userId);
                setCancellationState(true);
              }}
            >Changes</button>
          </div>
          <div 
            className='btn-container'
            // hidden={divState}
          >
            <button id='gradient-btn' className='duo-btn'>Chat</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileInvites;