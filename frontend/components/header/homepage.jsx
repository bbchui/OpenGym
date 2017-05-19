import React from 'react';
import FeaturedGymsContainer from './featured_gyms_container';
import GreetingContainer from './greeting_container';

const Homepage = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
      <FeaturedGymsContainer />
  </div>
)

export default Homepage;
