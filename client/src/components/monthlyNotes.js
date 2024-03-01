import React, { useContext } from 'react';
import { appContext } from '../hook/appContext';
import mockData from '../mock-data.json';
import { categorizeMeal ,displayMonthDay } from './dateHandler';
import './stylesheets/notes.css';

const MonthlyNotes = () => {

  const {friState} = useContext(appContext);
  const tempUserId = "001";
  const acc = (id) => mockData.accounts.filter(obj => obj.id === id);

  const filteredTemp = mockData.confirmedMeals[tempUserId].map(ele => mockData.pendingInvite.filter(obj => obj.id === ele));

  // create a clone to prevent .map method from mutating object pointed by 'filteredTemp'
  let transformedTemp = JSON.parse(JSON.stringify(filteredTemp)); 
  
  transformedTemp = transformedTemp.map(obj => {
    const accDate = new Date(obj[0].date);  
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

  const currentMonthEvents = sortedTemp.filter(obj => obj.date.slice(4, 6) == currentMonth);

  // function 'agendaListObj' returns an object.
  let agendaListObj = currentMonthEvents.map(obj => {
    const date = displayMonthDay(obj[0].date);
    const dateObj = new Date((new Date(obj[0].date)).setHours(0, 0, 0));

    const meal = categorizeMeal(obj[0].time);

    const firstName = `${acc(obj[0].userId)[0].firstName.slice(0, 1).toUpperCase()}${acc(obj[0].userId)[0].firstName.slice(1)}`
    const lastInitial = acc(obj[0].userId)[0].lastName.slice(0, 1).toUpperCase();
    // console.log(obj)
    const time = obj[0].time;

    return {
      date,
      dateObj,
      meal,
      firstName,
      lastInitial,
      time
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

  // agendaListObj.forEach(obj => console.log(obj))
  const displayNotes = (obj) =>  <li className='agenda'><b className='date'>{obj.date}</b> {obj.time}: {obj.meal} w/ {obj.firstName} {obj.lastInitial}.</li>;

  let monthlyEvents = agendaListObj.map(obj => displayNotes(obj));
  let dailyEvents = agendaListObj.filter(obj => obj.dateObj === String(new Date(new Date().setHours())));
  dailyEvents = dailyEvents.length === 0 ? "You have no meals planned today" : dailyEvents.maps(obj => displayNotes(obj))

  return(
    <div className='notes-container'>
      <div className='notes'>
        <h3>This month at a glance:</h3>
        <ul>
          {/* {agendaList} */}
          {friState ? dailyEvents : monthlyEvents}
          {/* {dailyEvents} */}
          {/* will iterate this and stylelize the information */}
        </ul>
      </div>
    </div>
  )
};

export default MonthlyNotes;