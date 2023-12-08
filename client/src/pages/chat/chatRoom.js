import React, {
  useState
} from 'react';
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
        -date
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

    EXAMPLE:
      - moved to mockData.json

    EXPLICIT:

    IMPLICIT:
      - The conversation should be saved into two objects.
      - each object should have a sub-object
        - In the subobject should be
      -Each conversation between two users should be given a unique id
      -the date should be generated using 'new Date()'
        -'new Date()' returns an object
          -has not decided if I want the date be object or stringifyed. 

    ALGO:

  */
  
  // For expanding and shrinking textarea.textbox

  const [ rowHeight, setRowHeight ] = useState(1);
  const cos = Array.from({ length: 4 }, (_, index) => (index + 1) * 24);
  const txtHeightHandler = (length) => {
    if (length > cos[0] && length < cos[1]+ 1 ) {
      setRowHeight(2)
    } else if (length > cos[1] && length < cos[2] + 1) {
      setRowHeight(3)
    } else if (length > cos[2] && length < cos[3] + 1) {
      setRowHeight(4)
    } else if (length > cos[3]) {
      setRowHeight(4)
    } else {
      setRowHeight(1)
    }
  }

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
          <div className='response-container'>
            <img src={tempPic} className='icon-container'/>
            <div className='chatBubble-container'>
              <div className='chatBubble'>
                I'm not allergic to anything, are you?
              </div>
            </div>
          </div>
          <div className='sender-container'>
            <div className='chatBubble-container'>
              <div className='chatBubble'>
                I'm unfortunately only allergic to peanuts and wine. BUT, not whine~
              </div>
            </div>
          </div>
          <div className='response-container'>
            <img src={tempPic} className='icon-container'/>
            <div className='chatBubble-container'>
              <div className='chatBubble'>
                haha, I mean that's what wine is for
              </div>
              <div className='chatBubble'>
                Seee u soooon
              </div>
            </div>
          </div>
          <div className='sender-container'>
            <div className='chatBubble-container'>
              <div className='chatBubble'>
                See ya
              </div>
            </div>
          </div>
        </div>
        <div id='textbox-container'>
          <div className='textbox-flex'>
            <textarea 
              id='textbox'
              className='textbox' 
              type='textbox'
              placeholder='Type message...'
              rows={rowHeight}
              onInput={()=> {
                let val = document.getElementById('textbox').value;
                // console.log(typeof val)
                txtHeightHandler(val.length)
              }}
            /> 
            <button id='attach-btn' className='textbox-btn'>att</button>
            <button id='mic-btn' className='textbox-btn'>mic</button>
          </div>
          {/* <button>send</button> */}
        </div>
      </div>
      
    </div>
  )
};

export default ChatRoom;