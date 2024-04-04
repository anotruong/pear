import React, {
  useContext
} from 'react';

// Component
import { appContext } from '../hook/appContext';
import mockData from '../mock-data.json';
import NaviBar from '../components/naviBar';
import PendingEvent from '../components/events/pending';
import UpcomingEvent from '../components/events/upcoming';

// Images
import SinglePear from '../images/smallLogo.png';
import AlertOffIcon from '../images/notificationOffIcon.png';
import CalIcon from '../images/calIcon-on.png';
import ChatOffIcon from '../images/chatOffIcon.png';

import './stylesheets/homePage.css';

const HomePage = ({id}) => {
  // The userId will be requested after 'login' or 'signin' state is assigned.

  const tempUserId = '001';
  const { setUserIdState } = useContext(appContext);

  setUserIdState(tempUserId)

  // console.log(userIdState)

  const { upcomingState, setUpcomingState } = useContext(appContext);
  const { pendingState, setPendingState } = useContext(appContext);

  // When logged in, the string value of 'id' will be passed through homePage. 
  const tempId = '001';
  const userObj = mockData.accounts.filter(obj => obj.id === tempId)[0];
  // console.log(userObj);

  // const confirmedMeals = mockData.confirmedMeals.filter(obj => obj.id)
  // mockData.confirmedMeals.forEach(obj => console.log(obj))
  let upcoming = mockData.confirmedMeals[tempId].map(id => mockData.pendingInvite.filter(obj => obj.id === id));
  upcoming = upcoming.map((obj, idx) => <UpcomingEvent key={idx} value={obj} />); 

  // console.log(upcoming)

  let pending = mockData.pendingInvite.filter(obj => obj.userId === tempUserId && obj.pending === false);
  pending = pending.map((obj, idx) => <PendingEvent key={idx} value={obj} />); 

  // console.log(mockData.pendingInvite.filter(obj => obj.userId === tempUserId && obj.pending === false))

  // console.log(pending)

  const colorGradient = 'linear-gradient(90deg, #FF884A, #FF7F98)';

  const eventStateHandler = () => {
    setUpcomingState(!upcomingState);
    setPendingState(!pendingState);

    console.log('this is working')
    console.log(`pending state is ${pendingState}`)
    console.log(`upcoming state is ${upcomingState}`)
  };

  return (
    <div id='homePage-container'>
      <div className='header-container'>
        <div id='upperNavi-container'>
          {/* single pear logo, notification icon, chat icon  */}
          <img 
            src={SinglePear}
            id='smallLogo'
          />
          <div id='upperNaviBtn-container'>
            <button 
              id='notification-btn'
              className='upperNavi-btn'
              style={{backgroundImage: `url(${AlertOffIcon})`}} 
            />
            <button 
              id='chat-btn'
              className='upperNavi-btn'
              style={{backgroundImage: `url(${ChatOffIcon})`}} 
            />
          </div>

        </div>
        <div id='greeting-container'>
          {/* Hello, FirstName or Perferred name */}
          <h1 className='firstName'>hello {userObj.firstName},</h1>
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
          <h4 className='eventBtnName'>Upcoming event</h4>
        </button>
        <button 
          id='pending' 
          className='eventBtn'
          style={{
            borderImageSource: `
          ${!pendingState ? "none" : colorGradient}`,
          color: `${!pendingState ? "#4D4D4D" : "#000000"}`
          }}
          onClick={(eventStateHandler)}
        >
          <h4 className='eventBtnName'>Pending</h4>
        </button>
      </div>
      <div id='white-container'>
        {/* <div id='homePage-flex'> */}

          {/* <div id='event-container'> */}
            {/* upcoming and pending events */}
            
            {/* Should display only one at a time for now */}
        <div id='upcoming-container'>
              {/* component */}
              {!upcomingState ? <></> : upcoming}
              {!pendingState ? <></> : pending}

              {/* <UpcomingEvent /> */}
        </div>
        {/* </div> */}

      </div>
      <div className='miscLinks'>
        <div className='link-container'>
          <a 
            href='reddit.com'
            id='calLink'
          >
          <img 
            src={CalIcon}
            id='smallCalIcon'  
          />Go to Calendar</a>
        </div>
        {/* weather API in lieu of covid19 api */}
        <div id='weatherAPI-container'>
          <h1> weatherAPI </h1>
        </div>
      </div>
      <div id='article-container'>
        {/* articles to the community */}
        <h2>community articles</h2>
        <h2>community articles</h2>
        <h2>community articles</h2>
      </div>
      {/* </div> */}

      <NaviBar />
    </div>
  )
};

export default HomePage;