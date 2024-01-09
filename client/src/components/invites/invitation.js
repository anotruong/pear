import React, { 
  useState 
} from 'react';
import mockData from '../../mock-data.json';
import tempPic from '../../images/tempPP.png';
import { displayDate } from '../dateHandler';
import '../stylesheets/invites.css';

const Invitation = ({acc}) => {
  const [ divState, setDivState ] = useState(true);

  /* Retrieve restId from arg 'acc'
      Iterate through restData obj
      FILTER obj that strictly equals to restId 
      RETURN filtered arr
  */

  // console.log(acc)

  const userId = acc.userId;
  const restId = acc.restId;

  const userData = mockData.accounts;
  const restData = mockData.restaurants;

  const user = userData.filter(obj => obj.id === userId)[0];
  // const restName = restData.filter(obj => obj.id === restId)[0]['name'];
// 
  const date = displayDate(acc.date)
  console.log(user)
  
  return (
    <div 
      className='openInvite-container'
      style={{
        background: `${!divState ? '#FFF1F1' : '#FFFAFA'}`,
      }}
    >
      <div className='profile-flex'>
        <div className='icon-container'>
          <img src={tempPic} className='profileIcon'/>
          <p className='fullName'>{user.firstName} {user.lastName.substring(0, 1)}.</p>
        </div>
        <div 
          className='info-container'
          onClick={() => setDivState(!divState)}
        >
          <p className='date'>{date}</p>
          <p className='time'>{acc.time}</p>
          <ul 
          hidden={divState}
          >
          <li>{user.personality}</li>
          <li>{user.diet}</li>
          <li>{user.alcohol}</li>
        </ul>
      </div>


      </div>
      <div className="button-flex">
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button 
          id='border-btn' className='duo-btn'>Propose new time</button>
        </div>
        <div 
          className='btn-container'
          hidden={divState}
        >
          <button id='gradient-btn' className='duo-btn'>request</button>
        </div>
      </div>
    </div>
  )
  };

export default Invitation;