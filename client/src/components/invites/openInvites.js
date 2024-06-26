import React, { 
  useEffect,
  useState
 } from 'react';
import mockData from '../../mock-data.json';
import tempPic from '../../images/tempPP.png'

import { displayDate } from '../dateHandler';

import '../stylesheets/openInvites.css';

const OpenInvite = ({account}) => {
  // console.log(account)
  const [ divState, setDivState ] = useState(true);

/* arg passed should have both accId and restId */

  const userId = account.userId;
  const restId = account.restId;

  const time = account.time;
  console.log(account.date)
  const date = displayDate(account.date);
  // console.log(typeof tempRestId)
  // console.log(tempAccId, tempRestId)

/* Iterate rest id for name. 
    START pass mockData.openInvites through 
    DECLARE variable that points to object assigned to mockData
    ITERATE through variable
      IDENTIFY restID
    END restId
*/


  const userData = mockData.accounts;
  const restData = mockData.restaurants;

  const user = userData.filter(obj => obj.id === userId)[0];
  const restName = restData.filter(obj => obj.id === restId)[0]['name'];
  // console.log(user);

  return (
    <div 
      className='openInvite-container'
      style={{
        background: `${!divState ? '#FFF1F1' : '#FFFAFA'}`,
      }}
      onClick={() => setDivState(!divState)}
    >
      <div 
        className='profile-flex'
      >
        <div className='icon-container'>
          <img src={tempPic} className='profileIcon'/>
          <p className='fullName'>{user.firstName} {user.lastName.substring(0, 1)}.</p>
        </div>
        <div 
          className='info-container'
        >
          <p className='date'>{date}</p>
          <p className='time'>{time}</p>
          <p className='restName-container'>@ {restName}</p>
          <ul 
            hidden={divState}
            >
            <li>{user.personality}</li>
            <li>{user.diet}</li>
            <li>{user.alcohol}</li>
          </ul>
        </div>
      </div>
      <div className="button-flex">
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button 
          id='border-btn' className='duo-btn'>Propose new time</button>
        </div>
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button id='gradient-btn' className='duo-btn'>request</button>
        </div>
      </div>
    </div>
  )
};

export default OpenInvite;