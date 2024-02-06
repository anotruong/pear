import React from 'react';
import mockData from '../mock-data.json';
import { categorizeMeal ,displayMonthDay } from './dateHandler';
import './stylesheets/notes.css';

const MonthlyNotes = () => {

  const tempUserId = "001";
  const acc = (id) => mockData.accounts.filter(obj => obj.id === id);

  // const tempMockData = [
  //   {
  //     date: '07/01',
  //     time: '12pm - 2pm',
  //     itinerary: ': w/ aubrey'
  //   },
  //   {
  //     date: '07/05',
  //     time: '4pm-5pm',
  //     itinerary: 'dinner w/ janet'
  //   },
  //   {
  //     date: '07/08',
  //     time: '11pm-1pm',
  //     itinerary: 'lunch w/ shane'
  //   },
  //   {
  //     date: '07/11',
  //     time: '7pm-9pm',
  //     itinerary: 'dinner w/ michael'
  //   },
  //   {
  //     date: '07/11',
  //     time: '8pm-10pm',
  //     itinerary: 'dinner w/ haruka'
  //   },
  //   {
  //     date: '07/30',
  //     time: '7am-9pm',
  //     itinerary: 'breakfast w/ Agnes'
  //   },
  // ];

  let filteredTemp = mockData.confirmedMeals[tempUserId].map(ele => mockData.pendingInvite.filter(obj => obj.id === ele))
  // .filter(obj => );

  console.log(filteredTemp)
  
  let transformedTemp = filteredTemp.map(obj => {
    const accDate = new Date(obj[0].date);  
    let year = accDate.getFullYear();
    let month = (accDate.getMonth() + 1).toString().padStart(2, '0');
    let day = accDate.getDate().toString().padStart(2, '0');
  
    console.log(accDate.getMonth().toString().padStart(2, '0'))
    let newDisplayDate = year + month + day;
    obj.date = newDisplayDate;
    // console.log(newDisplayDate)
    return obj;
  })
  // console.log(filteredTemp)
  // console.log(transformedTemp)


  // // In the context of sorting Date objects, using getTime() ensures that the sorting is based on the underlying timestamp representation of each date. 
  // let sortedTemp = transformedTemp.sort((a, b) => b.date - a.date);

  // // console.log(sortedTemp)

  // let agendaList = sortedTemp.map(obj => {
  //   const date = displayMonthDay(obj[0].date);
  //   const meal = categorizeMeal(obj[0].time);

  //   const firstName = `${acc(obj[0].userId)[0].firstName.slice(0, 1).toUpperCase()}${acc(obj[0].userId)[0].firstName.slice(1)}`
  //   const lastInitial = acc(obj[0].userId)[0].lastName.slice(0, 1).toUpperCase();
  //   // console.log(abbrName)

  //   return (
  //     <li className='agenda'><b className='date'>{date}</b> {obj[0].time}: {meal} w/ {firstName} {lastInitial}.</li>
  //   )
  // });


  return(
    <div className='notes-container'>
      <div className='notes'>
        <h3>This month at a glance:</h3>
        <ul>
          {/* {agendaList} */}
          {/* will iterate this and stylelize the information */}
        </ul>
      </div>
    </div>
  )
};

export default MonthlyNotes;