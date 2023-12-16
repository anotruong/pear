import React from 'react';
import tempPic from '../images/tempPP.png';

import mockData from '../mock-data.json';

// import '../pages/chat/chatRoom.css';

const SentMessages = () => {
  /*
  PROBLEM: Evaluate subobjects by their userId.
  
  EXPLICIT:
    - Each subobject should be evaluated by their userId
      - value of 'msg' should be displayed depending on their userId

  IMPLICIT:
    - could use a transformation method to evaluate the array.
    - user responding should have aset id that is passed through this component.

  ALGO:
    START object
    DECLARE array in object to 'subarray' variable
    ITERATE over 'subarray' 
    TRANSFORM subobject in subarray to react div
    RETURN undefined
  */

  /*
    Other problems:
      - How to retrieve convoId that is associated with both the user and it's correspondant
      - How to update the conversation without rerendering the entire conversation with every user input.

    */
  // tempID from mockData
  const convoId = 'alksdf';

  const userId = '001'
  const convo = mockData.convo;
  const displayConvo = convo[convoId].map(subObj => {
    if (userId !== subObj.userId) {
      return (
      <div className='response-container'>
        <img src={tempPic} className='icon-container'/>
        <div className='chatBubble-container'>
          <div className='chatBubble'>
            subObj.msg
          </div>
        </div>
      </div> )
    } else {
      return (
      <div className='sender-container'>
        <div className='chatBubble-container'>
          <div className='chatBubble'>
           {subObj.msg}
          </div>
        </div>
      </div>)
    }
    }
  );

  // console.log(convo.alksdf);

  return (
    <div id='message-container'>
      {displayConvo}
    </div>
  )
}

export default SentMessages;
{/* <div className='response-container'>
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
</div> */}