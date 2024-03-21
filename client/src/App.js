// import logo from './logo.svg';
import React from 'react'
import { useEffect, useState } from 'react';
import { appContext } from './hook/appContext';
import LoginPage from './pages/login/loginPage';

import CalendarPage from './pages/calendarPage';
import SearchPage from './pages/search/searchPage';
import HomePage from './pages/homePage';
import Calendar from 'react-calendar';
import ChatIndex from './pages/chat/index';

import './App.css';
import ProfilePage from './pages/profilePage';
import SignInPage from './pages/login/signinPage';
import SignUpPage from './pages/login/signupPage';

function App() {
  const [ homeBtn, setHomeBtn ] = useState(true);
  const [ searchBtn, setSearchBtn ] = useState(true);
  const [ addBtn, setAddBtn ] = useState(false);
  const [ profileBtn, setProfileBtn ] = useState(false);
  const [ calBtn, setCalBtn ] = useState(true);
  const [ loginState, setLoginState ] = useState(true);
  const [ homeState, setHomeState ] = useState(false);

  // Custom hook component for font and maybe something else
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  // HomePage hooks
  const [ upcomingState, setUpcomingState ] = useState(true);
  const [ pendingState, setPendingState ] = useState(false);

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

  return (
    <appContext.Provider value={{
      homeBtn, setHomeBtn,
      searchBtn, setSearchBtn,
      addBtn, setAddBtn,
      profileBtn, setProfileBtn,
      calBtn, setCalBtn,
      loginState, setLoginState,
      upcomingState, setUpcomingState,
      pendingState, setPendingState
    }}>  
      <div className="App">
        {windowWidth > 605 ? <div className='mobilePls' >
          <div className='mobilePls-flex'>
            <h1>Pear</h1>
            <h3>is a mobile only web app.</h3>
            <span>This application is best viewed on a mobile browser or with a resolution width below 605. Please use Google Inspect to view through the project.</span>
    
          </div>
        </div> : <>
          {/* {!loginState ? <></> : <LoginPage />} */}
          {/* {!calBtn ? <></> : <CalendarPage />} */}
          {/* {!searchBtn ? <></> : <SearchPage />} */}
          {/* {!homeBtn ? <></> : <HomePage />} */}
          {/* <ChatIndex /> */}
          {/* <ProfilePage /> */}
          {/* <SignInPage /> */}
          <SignUpPage />
        </>}
        

        {/* {!loginState ? <></> : <LoginPage />} */}
        {/* {!calBtn ? <></> : <CalendarPage />} */}
        {/* {!searchBtn ? <></> : <SearchPage />} */}
        {/* {!homeBtn ? <></> : <HomePage />} */}
        {/* <ChatIndex /> */}
        {/* <ProfilePage /> */}
        {/* <SignInPage /> */}
        <SignUpPage />
      </div>
    </appContext.Provider>
  );
}

export default App;
