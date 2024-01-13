import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import NaviBar from '../components/naviBar.js';

// import './chat/chat.css'

import { appContext } from '../hook/appContext';

import tempPic from '../images/tempPP.png';
import PendingEvent from '../components/events/pending';
import UpcomingEvent from '../components/events/upcoming';
import mockData from '../mock-data.json';

import './stylesheets/profilePage.css'

const ProfilePage = ({obj}) => {
/* This page is to display the profiles of other users.


PROBLEM: 
- Displays other users' profiles

EXPLICIT:
- Display:
  - Icon
  - UserName
  - # of connections
  - rating by other users
  - Short Bio
  - Open Invites started by Users
  - Archived Invites
- Buttons
  - Chat
  - Connect
  - Navi bar at the bottom

IMPLICIT:
- Rating:
  - At the end of the timed event, the users have a chance to rate the platonic date.
- # of Connections
  -
- Connect and Chat btns
  - What does it mean to connect and how is that different from chat?

DATA: What the arg is and the return is

ALGO: 

ACCESS:
- How can the user access the profile page?
  - click on the Icon of the user

*/
  
  // Obj should include accID.
  const tempId = '001';
  const accInfo = mockData.accounts.filter(acc => acc.id === tempId)[0];
  const username = accInfo.userName;
  const fullname = `${accInfo.firstName} ${accInfo.lastName}`
  const firstName = accInfo.firstName.charAt(0).toUpperCase() + accInfo.firstName.slice(1);

  // console.log(accInfo);
  // console.log(usefullrname)

  const { upcomingState, setUpcomingState } = useContext(appContext);
  const { pendingState, setPendingState } = useContext(appContext);
    
  const colorGradient = 'linear-gradient(90deg, #FF884A, #FF7F98)';

  const eventStateHandler = () => {
    setUpcomingState(!upcomingState);
    setPendingState(!pendingState);

    console.log('this is working')
    console.log(`pending state is ${pendingState}`)
    console.log(`upcoming state is ${upcomingState}`)
  };

  const accInvites = mockData.pendingInvite.filter(obj => obj.userId === tempId);
  console.log(accInvites);

  const unconfirmedInvites = accInvites.filter(obj => obj.pending === true)

  const archivedInvites = accInvites.filter(obj => obj.pending === false);
  
  const unconfirmed = unconfirmedInvites.map((obj, idx) => <UpcomingEvent key={idx} invites={obj}/>);
  // console.log(invites)

  const archived = archivedInvites.map((obj, idx) => <UpcomingEvent key={idx} invites={obj} /> );

  // const archived = accInvites.filter(obj => obj.pending === false);
  // console.log(archived)

  return (
    <div className="profilePage-container">
      <div className='profilePage-flex'>
        <div id='pinkHeader-container'>
          {/* information about the profile */}
          <div id='chatHeader-flex'>
            <div className='btn-container'>
              <button id='backBtn' />
            </div>
            {/* <h4 id='chats'>Yoona K.</h4> */}
            <div className='btn-container'>
              <button id='expandBtn' />
            </div>
          </div>
          <div id='chatHeader-flex'>
            <div className='profileInfo-container'>
              <div className='icon-container'>
                {/* photo and name */}
                <img src={tempPic} className='profileIcon'/>
                <h3 className='username'>@{username}</h3>

              </div>
              <div className='info-container'>
                <div className='info-flex'>
                  <h3 id='fullName'>{fullname}</h3>
                  <div className='ratings-flex'>
                    <div className='connections-container'>
                      connections
                      <div className='ratings'
                      id='numOfConnect'>
                        120
                      </div>
                    </div>

                    <div className='pearReviews-container'>
                      pear rating
                      <div className='ratings' id='numOfPReviews'>
                        4.4
                      </div>
                    </div>
                  </div>
                  <div className='aboutMe-container'>
                    Hello fellow netizens~ I'm Yoona and originally from Busan, but currently live in NYC temporarily for work. I want to try all the resturants, but I can only eat so much as a table for one.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='profileBtn-container'>
            <div className='profileBtn-flex'>
              <div 
                className='btn-container'
              >
                <button 
                id='gradient-btn' className='duo-btn'>Connect</button>
              </div>
              <div 
                className='btn-container'
              >
                <button id='border-btn' className='duo-btn'>Chat</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='activity-container'>
          display active and archived invitations 
        </div> */}
        <div className='activity-container'>
          {/* upcoming and pending events */}
          <div id='eventBtn-flex'>
            <button 
              id='upcoming' 
              className='eventBtn' 
              style={{
                borderImageSource: `
                ${!upcomingState ? "none" : colorGradient}`,
                color: `${!upcomingState ? "#4D4D4D" : "#000000"}`
              }}
              onClick={(eventStateHandler)}
            >
              <h4 className='eventBtnName'>{firstName}'s invites</h4>
            </button>
            <button 
              id='pending' 
              className='eventBtn'
              style={{borderImageSource: `
              ${!pendingState ? "none" : colorGradient}`,
              color: `${!pendingState ? "#4D4D4D" : "#000000"}`
            }}
              onClick={(eventStateHandler)}
            >
              <h4 className='eventBtnName'>Archived</h4>
            </button>
          </div>
          {/* Should display only one at a time for now */}
          <div id='upcoming-container'>
            
            {upcomingState ? unconfirmed : archived}
          </div>
        </div>
        <NaviBar />
      </div>
    </div>
  )
}

export default ProfilePage;