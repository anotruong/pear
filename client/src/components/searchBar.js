import React, {
  useState
} from 'react';

import miniSearchIconOff from '../images/miniSearchIconOff.png';
import miniSearchIconOn from '../images/miniSearchIconOn.png';
import './stylesheets/searchBar.css';

const SearchBar = ({ placeholder, ...otherProps}) => {
  // check if inputState is empty. If it evaluates empty it changes the searchIcon image.
  const [ inputState, setInputState ] = useState(false); 
  const [ userInput, setUserInput ] = useState("");

  const rightMargin = !otherProps.rightMargin ? '0rem' : '2rem';
  const bgColor = '#' + otherProps.bgColor;

  // console.log(otherProps)

  return (
    <div id='searchBar-container'>
      <div 
        className='searchBar-flex'
        style={{
          backgroundImage: `url(${!inputState ? miniSearchIconOff : miniSearchIconOn})`,
          marginRight: `${rightMargin}`,
          borderColor: `${bgColor}`,
          backgroundColor: `${bgColor}`
        }}
      >
        <input 
          type='text' 
          id='searchBar' 
          placeholder={placeholder}
          style={{
            backgroundColor: `${bgColor}`
          }}
          onInput={() => {
            // console.log(document.getElementById('searchBar').value)
            let val = document.getElementById('searchBar').value;
            // evaluate 'val' to falsy here instead of using hook.
            !val ? setInputState(false) : setInputState(true);

            setUserInput(val);
            
            console.log(userInput)
          }} 
        />
      </div>
    </div>
  )
};

export default SearchBar;