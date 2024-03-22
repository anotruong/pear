import React, {
  useContext
} from 'react';

import pearLogo from '../../images/pear-logo.png';
import LogInPage from './loginPage';
import SignUpPage from './signupPage';

import '../stylesheets/startPage.css';
import { appContext } from '../../hook/appContext';


const StartPage = () => {
  const { logBtnState, setLogBtnState } = useContext(appContext);
  const { signBtnState, setSignBtnState } = useContext(appContext);

  const loginHandler = () => {
    setLogBtnState(true);
    setSignBtnState(false);
  };

  const signHandler = () => {
    setSignBtnState(true);
    setLogBtnState(false);
  }

  const startDiv =  <div id='startPage-container'>
    <div className='startPage-flex'>  
      <div id='intro-flex' >
        <h1>Welcome to Pear</h1>
        <p>Finding someone to eat with anywhere, anytime just got easy</p>

      </div>
      <div id='pearLogo' />
        <div id='btn-container'>
          <div id='login-container'>
            <button 
              id='border-btn' 
              className='duo-btn'
              onClick={loginHandler}
            >Login</button>
          </div>
          <div id='signUp-container'>
            <button 
              id='gradient-btn' 
              className='duo-btn'
              onClick={signHandler}
            >Sign Up</button>
          </div>

        </div>
      </div>
    </div>;

  return (
    <React.Fragment>
      {!signBtnState && !logBtnState ? startDiv : <></>}
      {logBtnState ? <LogInPage /> : <></>}
      {signBtnState ? <SignUpPage /> : <></>}
    </React.Fragment>
  )
};

export default StartPage;