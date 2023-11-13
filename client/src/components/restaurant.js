import React from 'react';
import HoeHyeong from '../images/rest-hoeHyeong.jpeg';
import StarRating from './starRating';
import './stylesheets/restaurant.css';


const RestaurantDisplay = () => {
  return (
    <div id='restaurant-container'>
      <div 
        id='image-container'
        // width={window.innerWidth} 
      >
        <img src={HoeHyeong} 
          width={window.innerWidth}
          height='80%'
        />
      </div>
      <div 
        id='restaurant-display'
      >
        <div id='name-container'> 
          <h2>Hoe-hyeon Resturant</h2>
        </div>
        <div id='info-container'>
          {/* <p id='starRating'>* * * * *</p> */}
          <StarRating />
          <div id='guide-container'>
            <span id='expenseGuide'>$$</span>
            <span id='cusine'>Traditional Korean</span>
          </div>
          <p id='location'>9-8 Toegye-ro 2-gil, Hoehyeon-dong, Jung-gu, Seoul, South Korea</p>
        </div>

      </div>
    </div>

  )
};

export default RestaurantDisplay;