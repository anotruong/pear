import React from 'react';

import '../stylesheets/signupPage.css';

const SignUpPage = () => {
  return (
    <div className='signUpPage-container'>
      <div className='signInForms-container'>
        <div className='signInForms-flex'>
          <div id='form' className='form'>
            <input 
              id='username' 
              className='signInForms' 
              type='text' 
              name='username'
              placeholder='User name'
            />
          </div>
          <div id='form' className='form'>
            <input 
              id='firstName' 
              className='signInForms' 
              type='text' 
              name='firstName'
              placeholder='First name'
            />
          </div>
          <div id='form' className='form'>
            <input 
              id='lastName' 
              className='signInForms' 
              type='text' 
              name='lastName'
              placeholder='Last name'
            />
          </div>
          <div id='form' className='form'>
            <input 
              id='email' 
              className='signInForms' 
              type='email' 
              name='email'
              placeholder='Email'
            />
          </div>
          <div id='form' className='form'>
            <input
              id='password'
              className='signInForms' 
              type='password' 
              name="password" 
              maxLength={18} 
              minLength={8}
              placeholder='Password'
            />
          </div>
        </div>
      </div>
      <div className='button-flex'
        // style={{flexDirection: 'column', alignItems: 'center'}}
      >
        <div 
          className='btn-container signIn'
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

export default SignUpPage;