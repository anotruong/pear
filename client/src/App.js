// import logo from './logo.svg';
import React from 'react'
import { useEffect, useState } from 'react';
import { appContext } from './hook/appContext';
import StartPage from './pages/start/startPage';
import LogInPage from './pages/start/loginPage';
import SignUpPage from './pages/start/signupPage';

import CalendarPage from './pages/calendarPage';
import SearchPage from './pages/search/searchPage';
import HomePage from './pages/homePage';
import Calendar from 'react-calendar';
import ChatIndex from './pages/chat/index';

import ProfilePage from './pages/profile/profile';
import ConfirmRes from './components/confirmation/confirmRes';

import './App.css';
import Cancellation from './components/confirmation/cancellation';
import RestaurantPage from './pages/search/restaurantPage';

function App() {
  // state for Navigation bar
  const [ homeBtn, setHomeBtn ] = useState(false);
  const [ searchBtn, setSearchBtn ] = useState(true);
  const [ addBtn, setAddBtn ] = useState(false);
  const [ calBtn, setCalBtn ] = useState(false);
  const [ profileBtn, setProfileBtn ] = useState(false);

  // state for startPage
  const [ logBtnState, setLogBtnState ] = useState(false);
  const [ signBtnState, setSignBtnState ] = useState(false);

  // State before login or signup is performed
  const [ startState, setStartState ] = useState(true);
  const [ homeState, setHomeState ] = useState(false);

  // State for chat 
  const [ chatBtn, setChatBtnState ] = useState();

  // State for confirmation components
  const [ confirmState, setConfirmState ] = useState(false);
  const [ confirmIdState, setConfirmIdState ] = useState('');
  const [ cancellationState, setCancellationState ] = useState(false);
  const [ cancelIdState, setCancelIdState ] = useState('');
  
  // console.log(`cancellation state is ${cancellationState}`)

  // HomePage hooks
  const [ upcomingState, setUpcomingState ] = useState(true);
  const [ pendingState, setPendingState ] = useState(false);


  // Custom hook component for viewing application
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const resolutionHandler = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', resolutionHandler);

    return () => {
      window.removeEventListener('resize', resolutionHandler);
    };
  }, []);

  useEffect(() => {
    // This effect runs when the 'width' variable changes
    console.log('Width changed:', windowWidth);
    // You can perform any action here based on the width change
  }, [windowWidth]); 

  // State for switching between daily and monthly notes for calendarPage
  const [ eventDisplay, setEventDisplay ] = useState(false);


  return (
    <appContext.Provider value={{
      homeBtn, setHomeBtn,
      searchBtn, setSearchBtn,
      addBtn, setAddBtn,
      profileBtn, setProfileBtn,
      calBtn, setCalBtn,
      startState, setStartState,
      upcomingState, setUpcomingState,
      pendingState, setPendingState,
      logBtnState, setLogBtnState,
      signBtnState, setSignBtnState,
      confirmState, setConfirmState,
      confirmIdState, setConfirmIdState,
      cancellationState, setCancellationState,
      cancelIdState, setCancelIdState,
      eventDisplay, setEventDisplay
    }}>  
      <div className="App">
        {windowWidth > 605 ? <div className='mobilePls' >
          <div className='mobilePls-flex'>
            <h1>Pear</h1>
            <h3>is a mobile only web app.</h3>
            <span>This application is best viewed on a mobile browser or with a resolution width below 605. Please use Google Inspect to view through the project.</span>
    
          </div>
        </div> : <>
          {/* Only one btn state should evaluate as true at any given time. */}
          {/* {startState ?<StartPage />  : <></>} */}

          {/*After logging in, 'HomePage' should be viewed first.  */}
          {/* {homeBtn ? <HomePage /> : <></>} */}
          {/* 'LoginPage' and 'SignUpPage' were moved to 'StartPage' */}

          {/* {searchBtn ? <SearchPage /> : <></>} */}

          {/* Add btn doesn't have a page. 
            - should be able to create a new invite and leave it open for nearby users to be notified. 
            - utilize yelp api for resturant location
            - */}

          {/* {calBtn ? <CalendarPage /> : <></>} */}
          <SearchPage />
          {/* <CalendarPage /> */}
          {cancellationState ? <Cancellation id={cancelIdState} /> : <></>}
            
          {/* Profile/Account Icon is not set up.
            - ProfilePage is probably not the profile page set up. 
            - The icon should be an account Icon used for settings? */}
          {/* {profileBtn ? <ProfilePage /> : <></>} */}
          {/* <ProfilePage /> */}
         {/* <ChatIndex /> */}

        </>}
      </div>
    </appContext.Provider>
  );
}

export default App;
