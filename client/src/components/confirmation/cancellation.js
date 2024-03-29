import React, { useContext } from 'react';
import tempPic from '../../images/tempPP.png';
import NaviBar from '../naviBar';
import mockData from '../../mock-data.json';
import { appContext } from '../../hook/appContext';

// import './stylesheets/cancellation.css';

const Cancellation = ({id}) => {
  console.log(`this id is ${id}`);
  const { setCancelIdState } = useContext(appContext);

  // user account information
  const userAcc = mockData.accounts.filter(obj => obj.id === id)[0];
  // console.log()


  // state for component to be active in app.js
  const { cancellationState, setCancellationState } = useContext(appContext);

  // example of required confirmation state
  const firstName = userAcc.firstName.slice(0, 1).toUpperCase() + userAcc.firstName.slice(1);
  const lastIntial = userAcc.lastName.slice(0, 1).toUpperCase();
  const name = firstName + ' ' + lastIntial;
  const date = 'Thursday, Oct. 7th, 2021';
  const time = '12pm-2pm';
  const restName = 'Bestia';
  const area = 'downtown LA';
  const cancellation = 2;

  /*Server Function:
    -Since this would remove an existing object from the database, */

  return (
    <div className="confirmation-container">
      <div className='confirmation-flex'>
        <div className='closeOut-flex'>
          <div className='closeOut-btn'>
            <button 
              id='closeOut'
              onClick={() => {
                setCancellationState(false);
                setCancelIdState('');
              }} 
            />
          </div>
        </div>
        <div className='confirmation-header'>
          <h2>Wanna make a change?</h2>
          <h4 id='subHeading'>Your meal with {name}. has been cancelled</h4>
        </div>
        <div className='orangeIcon'>
          <img src={tempPic} className='pfp'/>
        </div>
        {/* <div className='apptInfo'>
          <p className='confirm date'>Scheduled for <b>{date} {time}</b></p>
          <p className='confirm location'><b>{restName}</b> ({area})</p>
        </div> */}
        <div className='requestConBtn'>
          <div 
            className='btn-container reschedule'
          >
            <button id='border-btn' className='duo-btn'>Cancel</button>
          </div>
          <div 
            className='btn-container reschedule'
          >
            <button 
            id='gradient-btn' className='duo-btn'>Reschedule</button>
          </div> 

        </div>
        <div className='cancelInfo-container'>
          You have <b>{cancellation}</b> cancellations left this month
        </div>
        <div className='removeCal'>
          This event has been removed to your calendar.
        </div>
      </div>

      
      <NaviBar />
    </div>
  );
}

export default Cancellation;