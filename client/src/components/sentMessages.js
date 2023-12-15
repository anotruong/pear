import React from 'react';
import tempPic from '../images/tempPP.png';

// import '../pages/chat/chatRoom.css';

const SentMessages = () => {

  /*
  PROBLEM: How to analyze an object that houses arrays that the values of the 'date' key.
  
  EXPLICIT:
    Should evaluate the nest objects in the array in 'message'
    use

  IMPLICIT:
    - How to cycle through

  ALGO:
  */

  return (
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
  )
}

export default SentMessages;