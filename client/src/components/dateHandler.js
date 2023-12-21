export const dateHandler = (date) => {
    /*Problem: DATE HANDLER
  
  EXPLICIT:
    - Should display date and time in messages.
  
  IMPLICIT:
    - Display either 'Today', 'Yesterday', or the date of the messages.
    - Time should be displayed in 12hr format
    - Date and Time should be displayed in messages in increments of 5 minutes from one another.

  DATA:
    String -> Object -> String

  ALGO:
    START string arg
    DECLARE 'date' variable an assign to arg
    TRANSFORM value of 'date' to object
    
  */

  // Date handler
  const dateString = date;

  // Convert string to Date object
  const dateTimeObj = new Date(dateString);
  // console.log(`Today's ${dateTimeObj}`)

  // Get today's date
  const todayDate = new Date();
  todayDate.setUTCHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

  // Get yesterday's date
  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(yesterdayDate.getDate());

  // console.log(`yesterday's date is ${yesterdayDate}`)

    // Format time in 12-hour format
  const formattedTime = dateTimeObj.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric'});

  // Format date in 'MM/DD/YY' format
const formattedDate = `${(dateTimeObj.getMonth() + 1).toString().padStart(2, '0')}/${dateTimeObj.getDate().toString().padStart(2, '0')}/${dateTimeObj.getFullYear().toString().substr(-2)}`;



  // Check if the date from the string is yesterday's date
  if (dateTimeObj.toDateString() === yesterdayDate.toDateString()) {

    // Display 'yesterday' with the formatted time
    // console.log(`Yesterday ${formattedTime} `);
    return `Yesterday ${formattedTime}`;
  } else if (dateTimeObj.toDateString() === todayDate.toDateString()) {

    // console.log(`Today ${formattedTime}`);
    return `Today ${formattedTime}`
  } else {
    // console.log(`${formattedDate} ${formattedTime}`);
    return `${formattedDate} ${formattedTime}`
  }

}