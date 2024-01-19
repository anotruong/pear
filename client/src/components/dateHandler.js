
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

export const displayMonthDay = (dateString) => {
  const dateObject = new Date(dateString);

  // Get month and day in two-digit format
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  // Form the desired output
  const transformedDate = `${month}/${day}`;

  return transformedDate;
}

export const categorizeMeal = (timeString) => {
  // Convert the time string to a Date object
  const currentTime = new Date();
  const [startHour, endHour] = timeString.split('-').map(parseTime);

  // Set the time in the current date object
  currentTime.setHours(startHour, 0, 0, 0);

  // Define meal time ranges
  const breakfastStart = new Date(currentTime);
  const breakfastEnd = new Date(currentTime);
  const lunchStart = new Date(currentTime);
  const lunchEnd = new Date(currentTime);
  const dinnerStart = new Date(currentTime);
  const dinnerEnd = new Date(currentTime);

  breakfastStart.setHours(5, 0, 0, 0);
  breakfastEnd.setHours(11.5, 0, 0, 0);
  lunchStart.setHours(11.5, 0, 0, 0);
  lunchEnd.setHours(15, 0, 0, 0);
  dinnerStart.setHours(16, 0, 0, 0);
  dinnerEnd.setHours(24, 0, 0, 0);

  // Compare the given time with meal time ranges
  if (currentTime >= breakfastStart && currentTime <= breakfastEnd) {
    return 'Breakfast';
  } else if (currentTime >= lunchStart && currentTime <= lunchEnd) {
    return 'Lunch';
  } else if (currentTime >= dinnerStart && currentTime <= dinnerEnd) {
    return 'Dinner';
  } else {
    return 'Unknown';
  }
}

// Helper function to parse time in AM/PM format
function parseTime(time) {
  const [hours, minutes] = time.split(':');
  const parsedHours = parseInt(hours);
  const parsedMinutes = parseInt(minutes) || 0; // Default to 0 if minutes are not provided
  return time.includes('pm') ? parsedHours + 12 : parsedHours;
}

// Example usage:
// const timeString = '2:00pm-4:00pm';
// const mealCategory = categorizeMeal(timeString);
// console.log(`The meal category for ${timeString} is: ${mealCategory}`);
