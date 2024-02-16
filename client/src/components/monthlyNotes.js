import React from 'react';
import mockData from '../mock-data.json';
import { categorizeMeal ,displayMonthDay } from './dateHandler';
import './stylesheets/notes.css';

const MonthlyNotes = () => {

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
  
    // console.log(accDate.getMonth().toString().padStart(2, '0'))
    let newDisplayDate = year + month + day;
    obj.date = newDisplayDate;
    // console.log(newDisplayDate);
    return obj;
  })
  // console.log(filteredTemp)
  // console.log(transformedTemp)


  // // In the context of sorting Date objects, using getTime() ensures that the sorting is based on the underlying timestamp representation of each date. 
  const sortedTemp = transformedTemp.sort((a, b) => a.date - b.date);

  let currentMonth = String(new Date().getMonth() + 1); //add 1 to the result because Jan is '0'.
  currentMonth = currentMonth.length === 2 ? currentMonth : '0' + currentMonth;
  // console.log(currentMonth)

  const currentMonthEvents = sortedTemp.filter(obj => obj.date.slice(4, 6) == currentMonth);

  let agendaList = currentMonthEvents.map(obj => {
    const date = displayMonthDay(obj[0].date);
    const meal = categorizeMeal(obj[0].time);

    const firstName = `${acc(obj[0].userId)[0].firstName.slice(0, 1).toUpperCase()}${acc(obj[0].userId)[0].firstName.slice(1)}`
    const lastInitial = acc(obj[0].userId)[0].lastName.slice(0, 1).toUpperCase();
    // console.log(abbrName)

    return (
      <li className='agenda'><b className='date'>{date}</b> {obj[0].time}: {meal} w/ {firstName} {lastInitial}.</li>
    )
  });


  return(
    <div className='notes-container'>
      <div className='notes'>
        <h3>This month at a glance:</h3>
        <ul>
          {agendaList}
          {/* will iterate this and stylelize the information */}
        </ul>
      </div>
    </div>
  )
};

export default MonthlyNotes;