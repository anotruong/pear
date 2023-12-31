import React, { 
  useEffect,
  useState 
} from 'react';
import tempRest from '../../images/tempRestaurant.png';
import mockData from '../../mock-data.json';
import SearchBar from '../../components/searchBar';

import '../stylesheets/listOfEstablishments.css';
import OpenInvite from '../../components/invites/openInvites';
import mapLinkIcon from '../../images/mapLinkIcon.png';
// import Invitation from '../../components/invites/invitation';

const ListOfEstablishments = ({prop}) => {
  // removed hook for responsive display 01/05
  // const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ inviteHeight, setInviteHeight ] = useState("");
  
  // removed hook for responsive display 01/05

  /* Sort confirmed and unconfirmed invitations.
    EXPLICIT: 
      - Should only display open invites that haven't been confirmed.

    ALGO: 
      START object
      DECLARE 'pendingInvite' that points arg object
      ITERATE through 'pendingInvite'
      RETURN array pointed by 'pendingInvite'
  */

  

  /*Iterate through an array and pass through function for rest-container div */
  const openInvite = mockData.openInvite;
  const restName = [
    'bestia', 'hoe-hyeon resturant', 'kachka', 'tomato pie',
    'tusk', 'seollungtang', 'boiling crab', "jumbo's playroom"
  ];

  const tempCatName = [
  'fine-dining', 'fast-food', 'new', 'happy-hour', 'russian', 'mexican', 'american', 'thai', 'persian'];

  const restHandler = restName.map(name => <div className='rest-container'>
    {/* <img src={tempRest}/> */}
    <div className='tempRest-container' 
      style={{backgroundImage: `url(${tempRest})`}} 
    />
    {name}</div>)

  const catNameHandler = tempCatName.map(ele => <div className='catName-container'>{ele}</div>);

  /*  OpenInvite Variable
    START pass arr in as arg
    ITERATE through arr.
    TRANSFORM element in arr obj => div
    END implicit statement.
  */

  // console.log(mockData.openInvite.filter(acc => acc.confirmed !== true))

  const filteredInvite = openInvite.filter(acc => acc.confirmed !== true)
    
  const openInvitations = filteredInvite.map((acc, idx) => <OpenInvite key={idx} account={acc} />)

  return(
    <div id='list-container'>
      <div id='list-flex'>
      {/* Search bar for resturants */}
        <SearchBar 
          rightMargin={true} 
          placeholder={'Search restaurants...'}
          bgColor={'F0F0F0'}
        />
        {/* Restaurants
            - Horizontal scroll of top restaurants by user*/}
        <div id='topRest-container'>
          <div className='flex-container'>
            <div className='title-flex'>
              <h3>Restaurants near</h3>
              <div id='mapLink-container'>
                <a href='reddit' id='mapLink'>Map view</a> 
              </div>
            </div>
            <h2 id='cityName'>Seoul</h2>
            <div id='horizontalscroll-flex'>
              {restHandler}
            </div>
          </div>
        </div>
        {/* Explore by catagory
            - Filter different types of establishments
              -  */}
        <div id='filterBy-container'>
          <div className='flex-container'>
            <h3>Explore by catagory</h3>
            <div id='horizontalscroll-flex'>
              {/* 'catNameHandler' should be buttons */}
              {catNameHandler}
            </div>
          </div>
        </div>
        {/* Invites near you
            - Show confirmed invites and restaurants */}
        <div 
          id='invite-container'
          style={{
            height: `${inviteHeight}vh`
          }} >
          <div className='flex-container'>
            <h3>Invites near you</h3>
            {/* outsource to a component */}
            <div id='verticalScroll'>
              {openInvitations}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListOfEstablishments;