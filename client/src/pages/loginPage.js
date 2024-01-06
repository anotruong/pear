import React from 'react';

import pearLogo from '../images/pear-logo.png';
import './stylesheets/loginPage.css';

const LoginPage = () => {
  return (
    <div id='loginPage-container'>
      <div className='loginPage-flex'>  
        <div id='intro-flex' >
          <h1>Welcome to Pear</h1>
          <p>Finding someone to eat with anywhere, anytime just got easy</p>

        </div>
        <div id='pearLogo' />
        <div id='btn-container'>
          <div id='login-container'>
            <button id='border-btn' className='duo-btn'>Login</button>
          </div>
          <div id='signUp-container'>
            <button id='gradient-btn' className='duo-btn'>Sign Up</button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default LoginPage;