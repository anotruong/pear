import React, { useContext, useState } from 'react';
import { appContext } from '../hook/appContext';
import mockData from '../mock-data.json';
import { categorizeMeal ,displayMonthDay } from './dateHandler';
import './stylesheets/notes.css';
import ProfileInvites from './invites/profileInvite';

const MonthlyNotes = () => {

  const { userIdState } = useContext(appContext);

  // console.log(userIdState)

  const {eventDisplay} = useContext(appContext);
  // const tempUserId = "001";
  const today = new Date();
  const acc = (id) => mockData.accounts.filter(obj => obj.id === id);

  const filteredTemp = mockData.pendingInvite.filter(obj => mockData.confirmedMeals[userIdState].map(ele => ele === obj.id));

  // let test1 = mockData.confirmedMeals[userIdState]
  // console.log(mockData.pendingInvite.filter(obj => test1.map(ele => obj.id === ele)))

  // console.log(mockData.confirmedMeals[userIdState].filter(ele ))

  // create a clone to prevent .map method from mutating object pointed by 'filteredTemp'
  let transformedTemp = JSON.parse(JSON.stringify(filteredTemp)); 
  
  // mutate the value of 'date' from date obj to string for sorting
  transformedTemp = transformedTemp.map(obj => {
    const accDate = new Date(obj.date);  
    let year = accDate.getFullYear();
    let month = (accDate.getMonth() + 1).toString().padStart(2, '0');
    let day = accDate.getDate().toString().padStart(2, '0');
  
    let newDisplayDate = year + month + day;
    obj.date = newDisplayDate;
    return obj;
  })

  // // In the context of sorting Date objects, using getTime() ensures that the sorting is based on the underlying timestamp representation of each date. 
  const sortedTemp = transformedTemp.sort((a, b) => a.date - b.date);

  let currentMonth = String(new Date().getMonth() + 1); //add 1 to the result because Jan is '0'.
  currentMonth = currentMonth.length === 2 ? currentMonth : '0' + currentMonth;
  // console.log(currentMonth)

  let currentMonthEvents = sortedTemp.filter(obj => obj.date.slice(4, 6) == currentMonth);

  // replace the value of 'date' with the obj value of 'date'.
  currentMonthEvents= currentMonthEvents.map(ele => filteredTemp.filter(obj => ele.id === obj.id)[0])
  currentMonthEvents= currentMonthEvents.filter(ele => userIdState === ele.userId1)


  console.log(currentMonthEvents)

  // function 'agendaListObj' returns an object.
  let agendaListObj = currentMonthEvents.map(obj => {
    // console.log(obj)
  
    const dateObj = new Date(obj.date)
    const date = displayMonthDay(obj.date);
    // console.log(displayMonthDay((dateObj)))

    // console.log(obj.date)
    // .setHours(0, 0, 0));

    const meal = categorizeMeal(obj.time);
    // console.log(acc(userIdState)[0].firstName.slice(0, 1).toUpperCase())

    const firstName = `${acc(userIdState)[0].firstName.slice(0, 1).toUpperCase()}${acc(userIdState)[0].firstName.slice(1)}`
    const lastInitial = acc(userIdState)[0].lastName.slice(0, 1).toUpperCase();
    // console.log(obj)
    const time = obj.time;
    const userId = obj.userId;
    const restId = obj.restId;

    return {
      date,
      dateObj,
      meal,
      firstName,
      lastInitial,
      time,
      userId,
      restId
    } 
  });


  /* NEW FUNCTION
    PROBLEM: WHEN 'currentDay selected' is selected, only show the notes that pertain to that day.

    EXPLICIT:
      - If the state of hook evaluates to true, display events pertaining to the day.
      - if state of hook evaluates to false, display events pertaining to the month

    IMPLICIT:
      - if the hook evaluates to true, but there are no events that day, return string.

    DATA: 
      OBJ -> HTML

    ALGO:
      START obj
      ITERATE through array pointed by obj
      INTERPOLATE the value of the keys
      RETURN HTML

  */

  const displayNotes = (obj) =>  <li className='agenda'><b className='date'>{obj.date}</b> {obj.time}: {obj.meal} w/ {obj.firstName} {obj.lastInitial}</li>;

  let monthlyEvents = agendaListObj.length === 0 ? "You have no meals planned for this month yet" : agendaListObj.map(obj => displayNotes(obj));

  // this needs to display the component that shows the events.
  let dailyEvents = agendaListObj.filter(obj => (obj.dateObj).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0));

  dailyEvents = dailyEvents.length === 0 ? "You have no meals planned for today" : dailyEvents.map((obj, idx) => <ProfileInvites key={idx} invite={obj} color={'black'} picAlign={true}/>);

  return(
    <div className='notes-container'>
      <div className='notes-flex'>

        <ul 
          className='list-container'
          style={{
            padding: `${eventDisplay ? '0rem 1rem' : '0rem 0em 0rem 2.5rem'}`
          }}>
          {/* {agendaList} */}
          {eventDisplay ? dailyEvents : monthlyEvents}
          {/* {dailyEvents} */}
          {/* will iterate this and stylelize the information */}
        </ul>
      </div>
    </div>
  )
};

export default MonthlyNotes;