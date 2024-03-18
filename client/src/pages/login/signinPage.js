import React from 'react';
import '../stylesheets/signinPage.css';

const SignInPage = () => {
  return (
    <div className='signInPage'>
      <div className='signInTitle-flex'>
        <h1 className='signInTitle' style={{fontSize: '8vw'}}>Ready to pear up?</h1>
        <p className='signIn-subtitle'>Let's get you logged in.</p>  
      </div>
      <div className='signInForms-container'>
       <div className='signInForms-flex'>
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
        <a href='reddit.com'>Forgot password?</a>
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

export default SignInPage;