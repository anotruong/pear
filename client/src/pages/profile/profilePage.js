import React from 'react';
import Profile from './profile';
import ChatIndex from '../chat';


const ProfilePage = () => {
  return (
    <div className='ProfilePage-container'>
      <Profile />
      {/* Chat btn should open chat 1 on 1 chat with the user it's show casing. */}
    </div>
  );
}

export default ProfilePage;