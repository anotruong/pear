import React from 'react';
import ChatList from './chatList';
import ChatRoom from './chatRoom';

import './chat.css'

const ChatIndex = () => {
  return(
    <div className='chatIndex-container'>
      {/* <ChatList /> */}
    <ChatRoom />
    </div>
  )
};

export default ChatIndex;

