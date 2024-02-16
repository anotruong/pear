import React from 'react';
import mockData from '../../mock-data.json';

function CalendarDays(props) {

  const tempUserId = '001';
  const confirmedMeals = mockData.confirmedMeals;

  let currentMonth = String(new Date().getMonth() + 1); //add 1 to the result because Jan is '0'.
  currentMonth = currentMonth.length === 2 ? currentMonth : '0' + currentMonth;
  // console.log(pendingInvite.forEach(obj => console.log(new Date(obj.date).getMonth() + 1)))
  const filteredTemp = confirmedMeals[tempUserId]
    .map(ele => mockData.pendingInvite.filter(obj => obj.id === ele))
    // .filter(obj => obj.date.slice(6, 7));
  // filteredTemp.forEach(obj => console.log(obj))
  // console.log(filteredTemp.filter(obj => obj.date.slice(6, 7)))
  // filteredTemp.forEach(obj => console.log(new Date(obj[0].date))

  // create a clone to prevent .map method from mutating object pointed by 'filteredTemp'
  // let transformedTemp = JSON.parse(JSON.stringify(filteredTemp)); 
  
  // transformedTemp = transformedTemp.map(obj => {
  //   const accDate = new Date(obj[0].date);  
  //   let year = accDate.getFullYear();
  //   let month = (accDate.getMonth() + 1).toString().padStart(2, '0');
  //   let day = accDate.getDate().toString().padStart(2, '0');
  
  //   let newDisplayDate = year + month + day;
  //   obj.date = newDisplayDate;
  //   // console.log(newDisplayDate);
  //   return obj;
  // });

  // const sortedTemp = transformedTemp.sort((a, b) => b.date - a.date);

  // console.log(currentMonth)

  // const currentMonthEvents = sortedTemp.filter(obj => obj.date.slice(4, 6) == currentMonth);

  // console.log(currentMonthEvents)

  let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

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

      return setHour.toString() === dateArg.toString();
      // coerce to string type because primitive data types can strictly evaluate to each other while non-primitive data types evaluate by where the pointer is stored.
    })

    return isTrue.length === 1;
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
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear(),
      appointment: hasAppointment(new Date(firstDayOfMonth))
    }

    currentDays.push(calendarDay);
  }

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
    console.log(day)
    let divDay =  <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + (day.appointment ? " app" : "")}
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