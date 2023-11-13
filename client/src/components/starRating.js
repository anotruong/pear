import React from 'react';

import unfilledStar from '../images/unfilledStar.png';
import filledStar from '../images/filledStar.png';
import './stylesheets/starRating.css';


const StarRating = () => {
  /*
  Star Rating Guide
    1 STAR ~20%
    2 STAR ~40%
    3 STAR ~60%
    4 STAR ~80%
    5 STAR ~100%

  Explicit: 
    -Five stars
      -Each star can be filled or outlined. 
      -Outline represents that the overall score of the resturant that haven't broken the minimum required to obtain that star
      -Filled star is the opposite.

  Implicit:
    -Arg passed through function should be numeric
    -The numberic arg passed through is depedant on the information provided by yelp API
    -If score is between 2-9 maybe equivilant to a half star

  */

  const StarHandler = () => {
    const starImg = <img src={unfilledStar} className='star'/>;
    const arr = [0, 1, 2, 3, 4];

    return arr.map(ele => starImg);
  }

  return (
    <div id='starRating-container'>
      {StarHandler()}
      <p id='reviewNum'>#.ratings</p>
    </div>
  )
};

export default StarRating;