// import logo from './logo.svg';
import React from 'react'
import { useEffect, useState } from 'react';
import { appContext } from './hook/appContext';
import LoginPage from './pages/loginPage';

import CalendarPage from './pages/calendarPage';
import SearchPage from './pages/search/searchPage';
import HomePage from './pages/homePage';
import Calendar from 'react-calendar';
import ChatIndex from './pages/chat/index';

import './App.css';
import ProfilePage from './pages/profilePage';

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
        {/* {!loginState ? <></> : <LoginPage />} */}
        {!calBtn ? <></> : <CalendarPage />}
        {/* {!searchBtn ? <></> : <SearchPage />} */}
        {/* {!homeBtn ? <></> : <HomePage />} */}
        {/* <ChatIndex /> */}
        {/* <ProfilePage /> */}
      </div>
    </appContext.Provider>
  );
}

export default App;
