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

  // console.log(openInvite)

  const profileForm = openInvite.map((acc, idx) => <Invitation key={idx} acc={acc} />)

  return (
    < 
      // className='invite-container'
    >
      <div className='inviteLink'>
          <div>
            <h3 className='invite'>Available Invites</h3>
          </div>
          <div id='createInvite-container' className='links'> 
          {/* send post request to server to create invitation.
              - When inviting, the invite should be an open invite from the user creating it.
              - Information needed from user..
                - Time and Date
                - Location is already set due to the restaurant state that the page points to.*/}
            <a href='reddit.com' id='createInvite'>Create invite</a>
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