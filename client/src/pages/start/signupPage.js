import React, {
  useContext
} from 'react';
import { appContext } from '../../hook/appContext';

import '../stylesheets/signupPage.css';

const SignUpPage = () => {
  const { setLogBtnState } = useContext(appContext);
  const { setSignBtnState } = useContext(appContext);

  const loginHandler = () => {
    setLogBtnState(true);
    setSignBtnState(false);
  };


  return (
    <div className='signUpPage-container'>
      <div className='signUpTitle'>
        <h1 
          style={{
            fontSize: '8vw',
            margin: '0rem'
        }}>Need a Pear?</h1>
        <p className='signUp-subtitle'>Sign up today</p>
      </div>
      <div className='signUpForms-container'>
        <div className='signUpForms-flex'>
          <div id='form' className='form signUp'>
            <input 
              id='username' 
              className='logInUp-Forms' 
              type='text' 
              name='username'
              placeholder='User name'
            />
          </div>
          <div id='form' className='form signUp'>
            <input 
              id='firstName' 
              className='logInUp-Forms' 
              type='text' 
              name='firstName'
              placeholder='First name'
            />
          </div>
          <div id='form' className='form signUp'>
            <input 
              id='lastName' 
              className='logInUp-Forms' 
              type='text' 
              name='lastName'
              placeholder='Last name'
            />
          </div>
          <div id='form' className='form signUp'>
            <input 
              id='email' 
              className='logInUp-Forms' 
              type='email' 
              name='email'
              placeholder='Email'
            />
          </div>
          <div id='form' className='form signUp'>
            <input
              id='password'
              className='logInUp-Forms' 
              type='password' 
              name="password" 
              maxLength={18} 
              minLength={8}
              placeholder='Password'
            />
          </div>
        </div>
      </div>
      <div className='button-flex signUp'
        // style={{flexDirection: 'column', alignItems: 'center'}}
      >
        <div 
          className='btn-container signUp'
          // hidden={divState}
        >
          <button 
          id='gradient-btn' className='duo-btn'>Submit</button>
        </div>
        {/* <div className='breakBorder'><hr>or</hr> </div> */}
        {/* <hr/> */}
        <div 
        className='btn-container border'
        // hidden={divState}
        >
          <button 
            id='border-btn' 
            className='duo-btn'
            onClick={loginHandler}
          >Already have an account?</button>
        </div>
      </div>
    
    </div>
  )
};

export default SignUpPage;