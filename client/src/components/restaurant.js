import React from 'react';
import restaurantPic from '../images/rest-hoeHyeong.jpeg';
import StarRating from './starRating';
import mockData from './../mock-data.json';
import './stylesheets/restaurant.css';


const RestaurantDisplay = ({restId}) => {

  const tempRestId = restId; 
  // console.log(tempRestId)
  //hoe-hyeon

  const restaurantInfo = mockData.restaurants.filter(obj => obj.id === tempRestId)[0];

  // console.log(restaurantInfo.name)

  return (
    <div id='restaurant-container'
      style={{
        backgroundImage: `url(${restaurantPic})`
      }}
    >
      <div 
        id='restaurant-display'
      >
        <div id='name-container'> 
          <h2>{restaurantInfo.name}</h2>
        </div>
        <div id='info-container'>
          <StarRating />
          <div id='guide-container'>
            <span id='expenseGuide'>$$</span>
            <span id='cusine'>{restaurantInfo.cusine}</span>
          </div>
          <p id='location'>
            {restaurantInfo.address}
            </p>
        </div>

      </div>
    </div>

  )
};

export default RestaurantDisplay;