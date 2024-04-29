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
      <div id='addPage-form'>
        <input type='text' placeholder='rest id'></input>
        <input type='text' placeholder='time'></input>
        <input type='text' placeholder='date'></input>

      </div>
      <NaviBar />
    </div>
  );
};

export default AddPage;