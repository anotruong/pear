import React, {
  useEffect,
  useState
} from 'react';
import NaviBar from '../components/naviBar.js';

// import './chat/chat.css'
import tempPic from '../images/tempPP.png';
import './stylesheets/profilePage.css'

const ProfilePage = () => {
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
                <h3 className='username'>@kYoo</h3>

              </div>
              <div className='info-container'>
                <div className='info-flex'>
                  <h3 id='fullName'>Yoona Kim</h3>
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
        <div className='activity-container'>
          {/* display active and archived invitations */}
        </div>
        <NaviBar />
      </div>
    </div>
  )
}

export default ProfilePage;