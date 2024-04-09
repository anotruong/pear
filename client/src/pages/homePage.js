import React, {
  useState,
  useEffect,
  useContext
} from 'react';

import axios from 'axios'; 

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

  // hook for login 'userId'
  const { userIdState, setUserIdState } = useContext(appContext);

  // state for divs
  const [ approvedState , setApprovedState ] = useState([]);
  const [ unapprovedState , setUnapprovedState ] = useState([]);

  // btn state
  const { upcomingState, setUpcomingState } = useContext(appContext);
  const { pendingState, setPendingState } = useContext(appContext);


  // cause 'useEffect' to re-render.
  // setUserIdState(tempUserId);

  // let confirmedMeals = mockData.confirmedMeals[userIdState];
  let pendingInvite = mockData.pendingInvite;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set 'userIdState' to 'tempUserId' if it's not already set
        if (!userIdState) {
          setUserIdState(tempUserId);
        }

        // Fetch confirmed meals based on the updated 'userIdState'
        const confirmedMeals = mockData.confirmedMeals[userIdState];

        // console.log(confirmedMeals)
        // Filter and map approved events
        const userInvites = await pendingInvite.filter(obj => confirmedMeals.map(ele => ele === obj.id));

        console.log(userInvites)
        const filteredApproved = userInvites.filter(obj => obj.pending === false && obj.userId1 === userIdState);
        const approvedEvents = filteredApproved.map((obj, idx) => <UpcomingEvent key={idx} value={obj} />);

        // Update approvedState only if it's not the same as the current state
        if (JSON.stringify(approvedEvents) !== JSON.stringify(approvedState)) {
          setApprovedState(approvedEvents);
        }

        console.log(approvedState)

        // Filter and map unapproved events
        // const pending = pendingInvite.filter(obj => confirmedMeals === obj.id);
        const filteredPending = userInvites.filter(obj => obj.pending === true && obj.userId1 === userIdState);
        const unapprovedEvents = filteredPending.map((obj, idx) => <PendingEvent key={idx} value={obj} />);

        // Update unapprovedState only if it's not the same as the current state
        if (JSON.stringify(unapprovedEvents) !== JSON.stringify(unapprovedState)) {
          setUnapprovedState(unapprovedEvents);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setUserIdState, tempUserId, userIdState, pendingInvite, approvedState, unapprovedState]);



  // Update userIdState when component mounts (just for demonstration)
  // useEffect(() => {
  //   try {
  //     // Set 'userIdState' to 'tempUserId' if it's not already set
  //     if (!userIdState) {
        
  //       setUserIdState(tempUserId);
  //     }    confirmedMeals = mockData.confirmedMeals[userIdState]
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   const fetchApproved = async () => {
  //     try {
  //       // let approvedInvite = await confirmedMeals.map(ele => pendingInvite.filter(obj => obj.id === ele && obj.pending === false));
  //       let approvedInvite = await pendingInvite.filter(obj => confirmedMeals.map(ele => obj.id === ele))
  //       approvedInvite = approvedInvite.filter(obj => obj.pending === false && obj.userId1 === userIdState)
  //       // console.log(approvedInvite)

  //       approvedInvite = approvedInvite.map((obj, idx) => <UpcomingEvent key={idx} value={obj} />)

  //       setApprovedState(approvedInvite)
  //       // console.log(approvedState)
  //       // mealState.map((obj, idx) => <UpcomingEvent key={idx} value={obj} />)

  //     } catch (error) {
  //       console.error('Error fetching approved data:', error);
  //     }
  //   }

  //   const fetchPending = async () => {
  //     try {

  //       let pending = await pendingInvite.filter(obj => confirmedMeals.map(ele => obj.id === ele))
  //       pending = pending.filter(obj => obj.pending === true && obj.userId1 === userIdState)
  //       // console.log(pending)

  //       pending = pending.map((obj, idx) => <PendingEvent key={idx} value={obj} />)

  //       setUnapprovedState(pending)
  //       // console.log(unapprovedState)
  //       // mealState.map((obj, idx) => <UpcomingEvent key={idx} value={obj} />)

  //     } catch (error) {
  //       console.error('Error fetching unapproved data:');
  //     }
  //   }
    
  //   fetchPending();    
  //   fetchApproved();

  // }, [setUserIdState, tempUserId, confirmedMeals, pendingInvite]);


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
          {/* <h1 className='firstName'>hello {userObj.firstName},</h1> */}
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
          {!upcomingState ? <></> : approvedState}
          {!pendingState ? <></> : unapprovedState}
          {/* {mealState} */}
        </div>
        {/* </div> */}

      </div>
      <div className='miscLinks'>
        {/* deprecated because there is already a cal icon at the bottom of the screen */}
        {/* <div className='link-container'>
          <a 
            href='reddit.com'
            id='calLink'
          >
          <img 
            src={CalIcon}
            id='smallCalIcon'  
          />Go to Calendar</a>
        </div> */}
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