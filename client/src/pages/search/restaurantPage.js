import React from 'react';

import RestaurantDisplay from '../../components/restaurant';

import AvailableInvite from '../../components/invites/invites';

const RestaurantPage = () => {
  return(
    <>
      <RestaurantDisplay />
      <AvailableInvite />
    </>
  )
};

export default RestaurantPage;