import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import { appContext } from '../../hook/appContext.js';

import mockData from '../../mock-data.json';

import NaviBar from '../../components/naviBar.js';
import ChatIndex from '../chat/index.js';
import ProfileInvites from '../../components/invites/profileInvite.js';

import tempPic from '../../images/tempPP.png';

import '../stylesheets/profilePage.css'

const Profile = ({id}) => {
  // If the 'id' arg matches the userId of the account signed in, then hide the buttons and allow for edits to happen to the account.
  // If no value is passed in through the arg 'id', use the 'userId' from 'appContext.js'

  const { userIdState } = useContext(appContext);

  const [ chatState, setChatState ] = useState(false);

  console.log(userIdState)
  // const tempId = '001';
  const myId = id === userIdState;
  const profileId = !myId ? userIdState : id;

  console.log(profileId);
  const accInfo = mockData.accounts.filter(acc => acc.id === profileId)[0];
  const username = accInfo.userName;
  const fullname = `${accInfo.firstName} ${accInfo.lastName}`
  const firstName = accInfo.firstName.charAt(0).toUpperCase() + accInfo.firstName.slice(1);
  const bio = accInfo.bio;

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

  const accInvites = mockData.pendingInvite.filter(obj => obj.userId === profileId);

  const unconfirmedInvites = accInvites.filter(obj => obj.pending === true).sort((a, b) => new Date(a.date) - new Date(b.date))

  const archivedInvites = accInvites.filter(obj => obj.pending === false).sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const unconfirmed = unconfirmedInvites.map((obj, idx) => <ProfileInvites key={idx} invite={obj} color={'black'} picAlign={false}/>);
  // console.log(invites)

  const archived = archivedInvites.map((obj, idx) => <ProfileInvites key={idx} invite={obj} color={'#4D4D4D'} picAlign={false}/> );

  return (
      <div className="profile-container">
        <div className='profile-flex'>
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
                      {bio}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className='profileBtn-container'
              hidden={!myId}
            >
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
          <div className='activity-container'>
            {/* upcoming and pending events */}
            
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

export default Profile;