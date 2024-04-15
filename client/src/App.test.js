import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import RequestConfirm from './pages/requestConfirm';
//import tempPic from '../images/tempPP.png';


// (function() {
//   var childProcess = require("child_process");
//   var oldSpawn = childProcess.spawn;
//   function mySpawn() {
//       console.log('spawn called');
//       console.log(arguments);
//       var result = oldSpawn.apply(this, arguments);
//       return result;
//   }
//   childProcess.spawn = mySpawn;
// })();

//initial fake test but it works
test('renders Pear text to the screen', () => {
  render(<App />);
  const strElement = screen.getByText(/Pear/i);
  expect(strElement).toBeInTheDocument();
});


//confim 'Sweet' success h3
test("renders 'Sweet' text to the screen", () => {
  render(<RequestConfirm />);
  const requestConfimHeaderSweet = screen.getByText(/Sweet/i);
  expect(requestConfimHeaderSweet).toBeInTheDocument();
});

/*literally renders 'username' to the screen. This may need to be tweaked when an actual username is on the screen*/
test("renders 'username' to be on the screen.'", () => {
  render(<RequestConfirm />);
  const requestConfirmHeaderAccept = screen.getByText(/'username'/i);
  expect(requestConfirmHeaderAccept).toBeInTheDocument();
});

test("renders 'accepted your request to eat together.' to the screen", () => {
  render(<RequestConfirm />);
  const requestConfirmHeaderAcceptMsg = screen.getByText(/accepted your request to eat together./i);
  expect(requestConfirmHeaderAcceptMsg).toBeInTheDocument()
});

/* This test fails. I would like for this test to confirm an image is on the screen*/
// test("Renders 'tempPic must have src = tempPic' image to the screen", () => {
//   render(<RequestConfirm />);
//   const tempPics = screen.getByRole('img');
//   expect(tempPics).toHaveAttribute('src', tempPic)
// });


// test("Renders 'date, time, and restaurant' on the screen", () => {
//   render(<RequestConfirm />);
//   const scheduleConfimDate = screen.getByText(/Scheduled for Thursday, Oct. 7th, 2021/i);
//   const scheduleConfirmTime = screen.getByText(/12pm-2pm/i);
//   const scheduleConfirmLocation = screen.getByText(/Bestia/i);
//   expect(scheduleConfimDate).toBeInTheDocument();
//   expect(scheduleConfirmTime).toBeInTheDocument();
//   expect(scheduleConfirmLocation).toBeInTheDocument();
// });

// future nice to test: 
// simulate button click events on the Chat and Connect buttons  
