import React, {
  useContext
} from 'react';

// Component
import { appContext } from '../hook/appContext';
import NaviBar from '../components/naviBar';
import PendingEvent from '../components/events/pending';
import UpcomingEvent from '../components/events/upcoming';
// import Invites from '../components/invites/invites';
// import Invitation from '../components/invites/invitation';

// Images
import SinglePear from '../images/smallLogo.png';
import AlertOffIcon from '../images/notificationOffIcon.png';
import AlertOnIcon from '../images/notificationOnIcon.png';
import CalIcon from '../images/calIcon-on.png';
import ChatOffIcon from '../images/chatOffIcon.png';
import ChatOnIcon from '../images/chatOnIcon.png';
import ClockIcon from '../images/clockIcon.png';
import LocationIcon from '../images/locationIcon.png';
import tempPic from '../images/tempPP.png';
import './stylesheets/homePage.css';

const HomePage = () => {
  const { upcomingState, setUpcomingState } = useContext(appContext);
  const { pendingState, setPendingState } = useContext(appContext);

  const tempName = 'Yoona';
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
      <div id='white-container'>
        <div id='homePage-flex'>

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
            <h1>Hello {tempName},</h1>
          </div>

          <div id='event-container'>
            {/* upcoming and pending events */}
            <div id='eventBtn-flex'>
              <button 
                id='upcoming' 
                className='eventBtn' 
                style={{borderImageSource: `
                  ${!upcomingState ? "none" : colorGradient}`}}
                onClick={(eventStateHandler)}
              >
                <h4 className='eventBtnName'>Upcoming event</h4>
              </button>
              <button 
                id='pending' 
                className='eventBtn'
                style={{borderImageSource: `
                ${!pendingState ? "none" : colorGradient}`}}
                onClick={(eventStateHandler)}
              >
                <h4 className='eventBtnName'>Pending</h4>
              </button>
            </div>
            {/* Should display only one at a time for now */}
            <div id='upcoming-container'>
              {/* component */}
              {!upcomingState ? <></> : <UpcomingEvent />}
              {!pendingState ? <></> : <PendingEvent />}

              {/* <UpcomingEvent /> */}
            </div>
          </div>

          {/* link to calendar */}
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
        </div>
        </div>

      <NaviBar />
    </div>
  )
};

export default HomePage;