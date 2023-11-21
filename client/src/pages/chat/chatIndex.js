import React from 'react';
import mockData from '../../mock-data.json';
import NaviBar from '../../components/naviBar';
import SearchBar from '../../components/searchBar';

import tempPic from '../../images/tempPP.png';

import './chat.css'

/*
  PURPOSE: 
    This component shows chat history with existing and past chats.

  EXPLICIT:
    - Return to home btn
    - search bar
    - Multiple chats that lead to a chat with an existing history
    - navi bar still shown
    - New Chat btn
    - Three dot btn

  IMPLICIT:
    - Search bar
      - should be able to search by name or content of chat?
    - 3 dot btn
      - should have option to delete?

  DATA:
    String (from database) -> React

  ALGO:
*/

const ChatIndex = () => {

  console.log(mockData.openConvo[0])
  console.log(mockData.accounts)

  /*
  To find firstname, use value of 'mockData.openConvo.userId' and iterate through 'mockData.accounts' and evaluate the 'userId' to 'id'.
  return the values of the 'firstName' and 'lastName'

  */
  const userId = mockData.openConvo[0].userId;
  console.log(`userId is ${userId}`)

  const account = mockData.accounts.filter(acc => acc.id === userId)[0];

  const fullName = `${account.firstName} ${account.lastName.substring(0,1)}.`;

  console.log(fullName)

  // console.log(account[0].firstName)

  return(
    <div id='chatIndex-container' >
      {/* search bar and upper part container*/}
      <div id='pink-container'>
        <div id='chatHeader-flex'>
          <div className='btn-container'>
            <button
              id='backBtn'
            />
          </div>
          <h4>Chats</h4>
          <div className='btn-container'>
            <button
              id='expandBtn'
            ></button>
          </div>
        </div>
        <SearchBar 
          placeholder={'search in chats'}
          bgColor={'FFF0EF'}
          rightMargin={false}
        />
      </div>
      {/* chat history container */}
      <div className='chatHistory-container'>
        <div className='chatHistory-flex'>
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
          <div className='preview-container' >
            <div className='horizontal-flex'>
              <p className='fullName'>{fullName}</p>
              <p className='lastSent'>1hr</p>
            </div>
            <p className='previewMsg'>this is crazy</p>
          </div>
        </div>
      </div>

      {/* navi bar */}
      <NaviBar />
    </div>
  )
};

export default ChatIndex;

