import React from 'react';
import GreetingContainer from './header/greeting_container';
import SessionFormContainer from './session/session_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';
import GymIndexContainer from './gyms/gyms_index_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={GymIndexContainer} />
  </div>
);

export default App;
