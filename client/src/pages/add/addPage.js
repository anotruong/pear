import React from 'react';
import NaviBar from '../../components/naviBar';


import './addPage.css';
const AddPage = () => {
  /*
    PROBLEM: 
      What is the purpose of this page?
        - to create a new invitation at a restaurant
        How is this different from 'create invite' on the restaurant page?
        - create invite automatically locates the restaurant ID of the invite and only askes for the time and date.
        - 'add page' creates an invite while searching for a restaurant.
    EXPLICIT:
    IMPLICIT:

  */
  return (
    <div id='addPage-container'>
      <div id='yelp map'>
        <h1>display map here</h1>
      </div>
      <div id='addPage-form'>
        <div id='form' className='form signUp'>
          {/* The function should search for a restaurant id */}
          <input type='text' id='restId-form' className='forms' placeholder='rest id'></input>
        </div>
        <div id='form' className='form signUp'>
          <input type='text' id='restId-form' className='forms' placeholder='time'></input>
        </div>
        <div id='form' className='form signUp'>
          <input type='text' id='date-form' className='forms' placeholder='date'></input>
        </div>
      </div>
      <NaviBar />
    </div>
  );
};

export default AddPage;