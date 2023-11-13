import React from 'react';
import mockData from '../../mock-data.json';
// import tempPic from '../../images/tempPP.png';
import Invitation from './invitation';
import '../stylesheets/invites.css';

const AvailableInvite = () => {

  const profileForm = mockData.accounts.map((acc, idx) => <Invitation key={idx} acc={acc} />)

  return (
    <div className='invite-container'>
      <div className='invite-flex'>
        <div className='inviteLink'>
          <div>
            <h3 className='invite'>Available Invites</h3>
          </div>
          <div className='links'> 
            <a href='reddit.com'>+ Create invite</a>
            </div>
      </div>
      <div className='availableNow-container'>
        {profileForm}
      </div> 
    </div>
  </div>
  )
}

export default AvailableInvite;