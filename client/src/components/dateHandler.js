
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

const hourHandler = () => {
  const dateString1 = '2023-12-20T19:16:27.904Z'; 
  // new string

  const dateString2 = '2023-12-20T18:16:27.904Z'; // An hour older than dateString1
  //replace this string with new string if it's older then the previous time.
  // If this string is undefined then return the time."

  // Convert strings to Date objects
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  // Calculate the time difference in milliseconds
  const timeDifference = date1 - date2;

  // Define the threshold for an hour (in milliseconds)
  const oneHourInMillis = 60 * 60 * 1000;

  // Check if the time difference is approximately an hour (within a certain threshold)
  if (timeDifference >= oneHourInMillis && timeDifference < oneHourInMillis * 2) {
    console.log("The second date string is approximately an hour older than the first date string.");
  } else { 
    console.log("The second date string is not an hour older than the first date string, or the time difference is not within an hour.");
  }
}


// Format new Date string to 'Day, Date'
function formatDate(dateString) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  };

  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
}

export const displayDate = (str) => {
  const originalDateString = str;
  const formattedDate = formatDate(originalDateString);

  return formattedDate;
}