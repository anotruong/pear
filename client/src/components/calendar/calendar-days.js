import React from 'react';
import mockData from '../../mock-data.json';

function CalendarDays(props) {

  const pendingInvite = mockData.pendingInvite;
  // console.log(pendingin)

  let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];


  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
      // appointment: 'evaluate if there is a pending invite that correlates with value of 'date'
    }

    currentDays.push(calendarDay);
    console.log(calendarDay.date)

  }

  // console.log(calendarDay)
  /* Create a function that would insert a break in the line of divs.
      Options: 
        - Create 6 variables pointed to 6 empty arrays.
        - Push the div into a new array when the length of the previous array reaches 7.
      ALGO:
        START array
        DECLARE 6 variables 'week#' that points to empty arrays;
        SORT the array into a variable that's length is less then 7.
        END 6 variables

  */


  let week1 = [];
  let week2 = [];
  let week3 = [];
  let week4 = [];
  let week5 = [];
  let week6 = [];

  currentDays.map((day) => {
    let divDay =  <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
          onClick={() => props.changeCurrentDay(day)}>
      <p>{day.number}</p>
      </div>;

    if (week1.length !== 7) {
      week1.push(divDay)
    } else if (week2.length !== 7) {
      week2.push(divDay)
    } else if (week3.length !== 7) {
      week3.push(divDay)
    } else if(week4.length !== 7) {
      week4.push(divDay)
    } else if(week5.length !== 7) {
      week5.push(divDay)
    } else {
      week6.push(divDay)
    }
    // <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
    //       onClick={() => props.changeCurrentDay(day)}>
    //   <p>{day.number}</p>
    //   </div>
    })

  return (
    <div className="table-content">
      {/* {
        currentDays.map((day, idx) => {
          return (
            <>
              <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                    onClick={() => props.changeCurrentDay(day)}>
                <p>{day.number}</p>
              </div>
            </>
          )
        })
      } */}
      <div className="week">
        {week1}
      </div>
      <div className="week">
        {week2}
      </div>
      <div className="week">
        {week3}
      </div>
      <div className="week">
        {week4}
      </div>
      <div className="week">
        {week5}
      </div>
      <div className="week">
        {week6}
      </div>
    </div>
  )
}

export default CalendarDays;