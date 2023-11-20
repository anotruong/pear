import React from 'react';

import NaviBar from '../../components/naviBar';


import SearchBar from '../../components/searchBar';
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

  // const chatDiv = 

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
          <div className='chat' >

          </div>
        </div>
      </div>

      {/* navi bar */}
      <NaviBar />
    </div>
  )
};

export default ChatIndex;

