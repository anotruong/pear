import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import PhoneImg from'../../images/phone.png';
import tempPic from '../../images/tempPP.png';
import SentMessages from '../../components/sentMessages';

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

  // const [ rowHeight, setRowHeight ] = useState(1);
  // const cos = Array.from({ length: 4 }, (_, index) => (index + 1) * 24);
  // const txtHeightHandler = (length) => {
  //   if (length > cos[0] && length < cos[1]+ 1 ) {
  //     setRowHeight(2)
  //   } else if (length > cos[1] && length < cos[2] + 1) {
  //     setRowHeight(3)
  //   } else if (length > cos[2] && length < cos[3] + 1) {
  //     setRowHeight(4)
  //   } else if (length > cos[3]) {
  //     setRowHeight(4)
  //   } else {
  //     setRowHeight(1)
  //   }
  // }
  const [textareaValue, setTextareaValue] = useState('');
  const textareaRef = useRef(null);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const calculateTextareaHeight = () => {
    if (textareaRef.current) {
      const fontSize = 4 * window.innerWidth / 100; // Convert '4vw' to pixels
      const lineHeight = fontSize * 1.2; // Adjust this multiplier for better fitting
      const maxLines = 4; // Maximum number of lines
      const minLines = 1; // Minimum number of lines
      const maxCharactersPerLine = 25; // Maximum characters per line

      // Calculate the maximum height based on the maximum number of lines
      const maxHeight = lineHeight * maxLines;
      const minHeight = lineHeight * minLines;

      // Calculate the number of lines based on line breaks
      const linesFromBreaks = Math.max(textareaValue.split('\n').length, minLines);

      // Calculate the number of lines based on characters
      const linesFromCharacters = Math.ceil(textareaValue.length / maxCharactersPerLine);

      // Calculate the new height based on both line breaks and character limits
      const lines = Math.min(Math.max(linesFromBreaks, linesFromCharacters), maxLines);

      // Calculate the new height based on the number of lines
      let newHeight = lines * lineHeight;

      // Limit height within the minimum and maximum values
      newHeight = Math.min(Math.max(newHeight, minHeight), maxHeight);

      // Allow scrolling if exceeding the maximum height
      const overflow = lines > maxLines ? 'auto' : 'hidden';

      return { height: `${newHeight}px`, overflow };
    }
    return { height: 'auto', overflow: 'hidden' }; // Default height if ref is not available yet
  };

  useEffect(() => {
    // Update the textarea's height when the textarea value changes
    if (textareaRef.current) {
      textareaRef.current.style.height = calculateTextareaHeight().height;
    }
  }, [textareaValue]);


  return(
    <div className='chatRoom-container'>
      <div className='chatRoom-flex'>
         <div id='pink-container'>
          <div id='chatHeader-flex'>
            <div className='btn-container'>
              <button id='backBtn' />
            </div>
            <h4 id='chats'>Yoona K.</h4>
            <div className='btn-container'>
              <button id='phoneBtn' />
            </div>
          </div>
          <div className='userIcon-flex'>
            <div className='userIcon-container'>
              <img src={tempPic} id='userIcon' alt='userIcon'/>
            </div>
            <div className='activity-container'>
              Active 20m ago
            </div>
          </div>
        </div>
        {/* import component */}
        <SentMessages />
        <div id='textbox-container'>
          <div className='textbox-flex'>
            <textarea 
              id='textbox'
              className='textbox' 
              type='textbox'
              placeholder='Type message...'
              ref={textareaRef}
              value={textareaValue}
              onChange={handleTextareaChange}
              style={calculateTextareaHeight()}
            /> 
            <button id='mic-btn' className='textbox-btn' />
            <button id='camera-btn' className='textbox-btn' />
          </div>
          {/* <button>send</button> */}
        </div>
      </div>
      
    </div>
  )
};

export default ChatRoom;