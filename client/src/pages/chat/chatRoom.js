import React from 'react';
import PhoneImg from'../../images/phone.png';
import tempPic from '../../images/tempPP.png';
import './chat.css';

const ChatRoom = ({acc}) => {
  /*
    PROBLEM:
      - Display chatroom between two users.

    EXPLICIT:
      - Chat is only for two users.
      - Only available after one of the users accepts the invitation.
      - phone capability (maybe)

      DESIGN
        - opposite user
          - display name on header
          - grey text message
          - shows icon for default picture
          - black font
        - account holder
          - gradient background
          - black font
        -time
          - for dates, displays previous dates, 'yesterday' and 'today'.
          - for time
            
    IMPLICIT:
      - text box should say 'Typing message...'
      - there should be a camera and a microphone icons
      - Pass name of user through header

    DATA:
      Object => String

    ALGO:
      START obj
      DECLARE 'fullname' variable.
  */

  /*
    PROBLEM:
      How to process conversation history?

    EXPLICIT:

    IMPLICIT:
      - The conversation should be saved into two objects.
      - each object should have a sub-object
        - In the subobject should be

    ALGO:

  */
  return(
    <div className='chatRoom-container'>
      <div className='chatRoom-flex'>
         <div id='pink-container'>
          <div id='chatHeader-flex'>
            <div className='btn-container'>
              <button id='backBtn' />
            </div>
            <h4>Chats</h4>
            <div className='btn-container'>
              <button id='phoneBtn' />
            </div>
          </div>
        </div>
        <div id='message-container'>
          <h1>message box should be here</h1>
        </div>
        <div id='textbox-container'>
          <h3>the text box goes here</h3>
        </div>
      </div>
      
    </div>
  )
};

export default ChatRoom;