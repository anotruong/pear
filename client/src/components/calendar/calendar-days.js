import React, { useContext, useState } from 'react';
import { appContext } from '../../hook/appContext';
import mockData from '../../mock-data.json';

function CalendarDays(props) {

  // const { eventDisplay, setEventDisplay } = useContext(appContext);
  const { eventDisplay, setEventDisplay } = useContext(appContext)

  const tempUserId = '001';
  const confirmedMeals = mockData.confirmedMeals;
  const bgGradient = 'linear-gradient(270deg, #FF6B8FE5, #FF8947)';

  let currentMonth = String(new Date().getMonth() + 1); //add 1 to the result because Jan is '0'.
  currentMonth = currentMonth.length === 2 ? currentMonth : '0' + currentMonth;

  const filteredTemp = confirmedMeals[tempUserId]
    .map(ele => mockData.pendingInvite.filter(obj => obj.id === ele))

  // console.log(filteredTemp)

  // create a, clone to prevent .map method from mutating object pointed by 'filteredTemp'

  let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  let todayIdx;
  let todayIdxArr = [];


  // console.log(firstDayOfMonth)

  /* Appointment Function
    START obj arr
    ITERATE through arr
    EVALUATE array with 'current calendar Date'
      if the array evaluates to true, return true
      else if the array evaluates to false, return false
    RETURN BOOLEAN
  */
  const hasAppointment = (dateArg) => {
    let isTrue = filteredTemp.filter(obj => {
      let setHour = new Date(new Date(obj[0].date).setHours(0, 0, 0));
      // Coerce to date type twice because '.setHours' method coerces data to number type
      // console.log(setHour)
      return setHour.toString() === dateArg.toString();
      // coerce to string type because primitive data types can strictly evaluate to each other while non-primitive data types evaluate by where the pointer is stored.
    })
    // console.log(isTrue)
    return isTrue.length >= 1;
  };

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
      day: (new Date(firstDayOfMonth).getDay()),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear(),
      appointment: hasAppointment(new Date(firstDayOfMonth))
    }

    currentDays.push(calendarDay);
    // console.log(calendarDay)
  }
  // bottom few lines of code handles the highlight when 'selected' ele is clicked
  currentDays.forEach((ele, idx) => ele.selected ? todayIdx = idx : "");

  let count = todayIdx;

  while (count > 0) {
    const daysInWeek = 7;

    todayIdxArr.push(count)
    count = count - daysInWeek;
  }
  // console.log(todayIdxArr.some(ele => tempId === ele ))

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

  //Marks the idx position of the week that the current day points to.
  let weekSelected;

  /* Create a function that changes the style background color of the elements that correspond with the 

  */


  currentDays.map((day, idx) => {
    /* if the 'todayDate' is a smaller number than the element, && if the idx is divisible by then allow the border radius to be blocked
    if 

    should I put all the 'week' arrays into a subarray and iterate through them in order to add the new function for the style?
    
    */
    const today = (new Date(new Date().setHours(0, 0, 0))).toString();
    // const todayDay = new Date().getDay();
    // const todayDate = new Date().getDay();
    // const bg = `if the 'todayDate' is a smaller number than the element, then allow the border radius to be blocked`
    const roundRadius = '0rem 0rem 2rem 2rem';
    const cornerRadius = '0rem';
    const gradient = eventDisplay ? bgGradient : "";
    const checkIdxHighlight = todayIdxArr.some(ele => idx === ele);
    /*
      PROB: 
        -highlight the elements of the idx that was divisble by their idx
        -
      EXPLICIT:
        - only change the bg of the index that was divisible of the current day index/
      IMPLICIT: 
      DATA:
      ALGO:
        START element and idx
        check for the 
    
    */

    const divDay =  <div className={'day-container'}
        style={{
          background: `${!checkIdxHighlight ? "" : gradient}`,
          borderRadius: `${(checkIdxHighlight && todayIdx === idx) ? roundRadius : cornerRadius}`  
        }} 
      ><div 
        className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + (day.appointment ? " app" : "")}
        onClick={() => {
          if (day.date.toString() === today){
            console.log("it's working");
            setEventDisplay(!eventDisplay);

            // affects ../../....monthlyNotes.js
            
          }
        }}
      >
        <p>{day.number}</p>
      </div></div>;


    if (week1.length !== 7) {
      if (day.selected) weekSelected = 0;
      // console.log(divDay)
      week1.push(divDay)
    } else if (week2.length !== 7) {
      if (day.selected) weekSelected = 1;

      week2.push(divDay)
    } else if (week3.length !== 7) {
      if (day.selected) weekSelected = 2;

      week3.push(divDay)
    } else if(week4.length !== 7) {
      if (day.selected) weekSelected = 3;

      week4.push(divDay)
    } else if(week5.length !== 7) {
      if (day.selected) weekSelected = 4;
      week5.push(divDay)
    } else {
      if (day.selected) weekSelected = 5;
      week6.push(divDay)
    }
  })

  /*
    PROB: The arrays that come after 'currentDay' will be assigned a function that activates on 'onClick' attribute when the 'currentDay' is selected. 

      The attribute will hide the respective arrays.
      The arrays will be unhidden after the 'onClick' attribute evaluates to falsy value.

    EXPLICIT:
      - When 'oncClick' attribute evaluates to true, hide the arrays.

    IMPLICIT:
      - The array that comes after the array that the 'currentDay' is asssigned to will have the value of their 'display' attribute be assigned to 'none'.
      - Iterate through array.
      - If the current day isn't in the array anymore then housing array, then assign the display attribute to the following divs.
      
    DATA:
    ALGO:
      START sub arrays
  
  */
  let weeks = [week1, week2, week3, week4, week5, week6];

  weeks = weeks.map((arr, idx) => {
    const displayState = `${eventDisplay ? "none" : ""}`

    return <div 
    id={ idx}
    className={"week " + idx}
    style={{
      display: `${idx > weekSelected ? displayState : ""}`,
      animationName: `${idx > weekSelected ? "fadeDiv" : ""}`
    }}
    >
      {arr}
    </div>
  })

  return (
    <div className="table-content">
      {weeks}
    </div>
  )
}

export default CalendarDays;