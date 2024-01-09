import React from 'react';
import mockData from '../../mock-data.json';
// import tempPic from '../../images/tempPP.png';
import Invitation from './invitation';
import '../stylesheets/invites.css';

const AvailableInvite = ({restId}) => {

  /*
    PROBLEM: Filter out openInvite from mockData.json via value pointed from "confirmed". Pass the information through 'Invitation' component.
  */

  const openInvite = mockData.openInvite.filter(obj => obj.restId === restId && obj.confirmed === false);

  console.log(openInvite)

  const profileForm = openInvite.map((acc, idx) => <Invitation key={idx} acc={acc} />)

  return (
    < 
      // className='invite-container'
    >
      <div className='inviteLink'>
          <div>
            <h3 className='invite'>Available Invites</h3>
          </div>
          <div className='links'> 
            <a href='reddit.com'>+ Create invite</a>
          </div>
        </div>
      <div 
        className='invite-container'
      >
        {/* <div className='invite-flex'> */}
        
          <div  className='availableNow-container'>
            {profileForm}
          </div> 
        {/* </div> */}
      </div>
    </>
    
  )
}

export default AvailableInvite;