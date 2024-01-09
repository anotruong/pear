import React from 'react';

import RestaurantDisplay from '../../components/restaurant';

import AvailableInvite from '../../components/invites/available';

const RestaurantPage = () => {
  const tempRestId = "012"
  return(
    <>
      <RestaurantDisplay 
        restId={tempRestId}
      />
      <AvailableInvite 
        restId={tempRestId}
      />
    </>
  )
};

export default RestaurantPage;