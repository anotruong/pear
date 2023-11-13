import React, { 
  useEffect,
  useState
 } from 'react';
import mockData from '../../mock-data.json';
import tempPic from '../../images/tempPP.png'

import '../stylesheets/openInvites.css';

const OpenInvite = ({account}) => {
  // console.log(account)
/* arg passed should have both accId and restId */

  const userId = account.userId;
  const restId = account.restId;
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

  // const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  // const [ inviteHeight, setInviteHeight ] = useState("");
  // useEffect(() => {
  //   const updateInviteHeight = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', updateInviteHeight);

  //   if (windowWidth <= 424) {
  //     setInviteHeight('30'); 
  //   } else if (windowWidth >= 768) {
  //     setInviteHeight('40');
  //   } else {
  //     setInviteHeight('35');
  //   };
  // });

  return (
    <div 
      className='openInvite-container'
      style={{
        background: '#FFFAFA',
        // height: `${inviteHeight}vh`
    }}
      // style={{background: `${!divState ? '#FFF1F1' : '#FFFAFA'}`}}
    >
      <div className='profile-flex'>
        <div className='icon-container'>
          <img src={tempPic} className='profileIcon'/>
          <p className='fullName'>{user.firstName} {user.lastName.substring(0, 1)}.</p>
        </div>
        <div 
          className='info-container'
          // onClick={() => setDivState(!divState)}
        >
          <p className='date'>Thursday, October 24th, 2024</p>
          <p className='time'>12pm-4pm</p>
          <p className='restName-container'>@ {restName}</p>
        </div>
      </div>
      {/* <div className="button-flex">
        <div 
          className='btn-container'
          // hidden={divState}
        >
          <button 
          id='newTime-btn' className='invite-btn'>Propose new time</button>
        </div>
        <div 
          className='btn-container'
          // hidden={divState}
        >
          <button id='request-btn' className='invite-btn'>request</button>
        </div>
      </div> */}
    </div>
  )
};

export default OpenInvite;