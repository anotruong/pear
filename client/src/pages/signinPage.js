import React from 'react';
import orangeLogo from '../images/orangeLogo.png';
import './stylesheets/signinPage.css';

const SigninPage = () => {
  return (
    <div className='signinPage'>
      <div className='signinTitle-flex'>
        {/* <img src={orangeLogo}/> */}
        <h1 className='signinTitle' style={{fontSize: '8vw'}}>Ready to pear up?</h1>
        <p className='signin-subtitle'>Let's get you logged in.</p>  
      </div>
      <div className='signinForms-container'>
       <div className='signinForms-flex'>
        <div id='form' className='form'>
          <input 
            id='email' 
            className='signinForms' 
            type='email' 
            name='email'
            placeholder='Email'
          />
        </div>
        <div id='form' className='form'>
          <input
            id='password'
            className='signinForms' 
            type='password' 
            name="password" 
            maxLength={18} 
            minLength={8}
            placeholder='Password'
          />
        </div>
        <a href='reddit.com'>Forgot password?</a>
       </div>
      </div>
      <div className='button-flex'
        // style={{flexDirection: 'column', alignItems: 'center'}}
      >
        <div 
          className='btn-container signin'
          // hidden={divState}
        >
          <button 
          id='gradient-btn' className='duo-btn'>Continue</button>
        </div>
        {/* <div className='breakBorder'><hr>or</hr> </div> */}
        <hr/>
        <div 
        className='btn-container border'
        // hidden={divState}
        >
          <button id='border-btn' className='duo-btn'>Continue with google</button>
        </div>
      </div>
    </div>
  )
};

export default SigninPage;