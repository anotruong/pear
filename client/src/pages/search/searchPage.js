import React, { useState } from 'react';
// import { Map } from '@googlemaps/react-wrapper';
// import BrowserMap from '../components/browserMap';
// testerMap

import '../stylesheets/searchPage.css';
import TesterMap from '../../components/testerMap';
import NaviBar from '../../components/naviBar';
import RestaurantPage from './restaurantPage';
import ListOfEstablishments from './listOfEstablishments';
const SearchPage = () => {
  // This state represents if a resturant has been chosen.
  const [restaurant, setRestaurant] = useState(false);
  return (
    <div id='searchPage-container'>
      {/* Map view of list. */}
      {/* <div id='map-container'>
        <TesterMap />
        </div> */}

      {/* List version */}
      <ListOfEstablishments />

      {/* Restaurant Page */}
      {/* <RestaurantPage /> */}

      <NaviBar />

    </div>
  )
};

export default SearchPage;