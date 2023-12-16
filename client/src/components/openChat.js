import React from 'react';
import mockData from '../mock-data.json';

import tempPic from '../images/tempPP.png'

import './stylesheets/openChat.css';

const OpenChat = ({...props}) => {

  // console.log(props.value);
  const openConvo = props.value;
  // console.log(openConvo.lastMessage)

  const lastMsg = openConvo.lastMessage;
  const userId = openConvo.userId;

  const account = mockData.accounts.filter(acc => acc.id === openConvo.userId)[0];

  // console.log(account)

  const fullName = `${account.firstName} ${account.lastName.substring(0,1)}.`;

  // console.log(fullName)

  return(
    <div className='openChat-container'>
      <div className='openChat-flex'>
        {/* Iterate through mockData.json to display chat history */}
        {/* <div className='profileInfo' >
          <img src={tempPic} />
        </div> */}
        <div className='icon-container'>
          <img 
            src={tempPic}      
            className='profileIcon' 
          />

        </div>
        <div 
          className='preview-container' 
          id={userId} 
          
        >
          <div className='horizontal-flex'>
            <p className='fullName'>{fullName}</p>
            <p className='lastSent'>1hr</p>
          </div>
          <p className='previewMsg'>{lastMsg}</p>
        </div>
      </div>
    </div>
  )
};

export default OpenChat;