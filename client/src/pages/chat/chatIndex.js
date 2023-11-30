import React from 'react';
import mockData from '../../mock-data.json';
import OpenChat from '../../components/openChat';
import NaviBar from '../../components/naviBar';
import SearchBar from '../../components/searchBar';

// import tempPic from '../../images/tempPP.png';

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

  console.log(mockData.openConvo)
  // console.log(mockData.accounts)

  /*
  To find firstname, use value of 'mockData.openConvo.userId' and iterate through 'mockData.accounts' and evaluate the 'userId' to 'id'.
  return the values of the 'firstName' and 'lastName'

  */

  /* Invoke function to return "chatHistory"
    START pass mockData.openConvo object and full
    TRANFORM ele in array with return value of 'chathistory'

  */
  // const userId = mockData.openConvo[0].userId;
  // console.log(`userId is ${userId}`)

  // const account = mockData.accounts.filter(acc => acc.id === userId)[0];

  // const fullName = `${account.firstName} ${account.lastName.substring(0,1)}.`;

  // console.log(fullName);

  const listOfOpenConvo = mockData.openConvo.map(ele => <OpenChat value={ele} />)

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
      <div className='chatList-container'>
        {/* <div className='chatList-flex'> */}
        {listOfOpenConvo}
        {/* </div> */}
      </div>

      {/* navi bar */}
      <NaviBar />
    </div>
  )
};

export default ChatIndex;

