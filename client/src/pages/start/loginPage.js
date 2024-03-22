import React, {
  useContext
} from 'react';
import { appContext } from '../../hook/appContext';
import '../stylesheets/loginPage.css';

const LogInPage = () => {
  const { setLogBtnState } = useContext(appContext);
  const { setSignBtnState } = useContext(appContext);

  const signHandler = () => {
    setSignBtnState(true);
    setLogBtnState(false);
  };

  return (
    <div className='logInPage'>
      <div className='logInTitle-flex'>
        <h1 className='logInTitle' style={{fontSize: '8vw'}}>Ready to pear up?</h1>
        <p className='logIn-subtitle'>Let's get you logged in.</p>  
      </div>
      <div className='logInUpForms-container'>
       <div className='logInUpForms-flex'>
        <div id='form' className='form logIn'>
          <input 
            id='email' 
            className='logInUp-Forms' 
            type='email' 
            name='email'
            placeholder='Email'
          />
        </div>
        <div id='form' className='form logIn'>
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
        <a href='reddit.com'>Forgot password?</a>
       </div>
      </div>
      <div className='button-flex'
        // style={{flexDirection: 'column', alignItems: 'center'}}
      >
        <div 
          className='btn-container logIn'
          // hidden={divState}
        >
          <button 
            id='gradient-btn' 
            className='duo-btn'
          >Continue</button>
        </div>
        {/* <div className='breakBorder'><hr>or</hr> </div> */}
        <hr/>
        <div 
        className='btn-container border'
        // hidden={divState}
        >
          <button 
            id='border-btn' 
            className='duo-btn'
            onClick={signHandler}
          >Don't have an account?</button>
        </div>
      </div>
    </div>
  )
};

export default LogInPage;