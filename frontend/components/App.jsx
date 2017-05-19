import React from 'react';
import GreetingContainer from './header/greeting_container';
import SessionFormContainer from './session/session_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';
import GymIndexContainer from './gyms/gyms_index_container';
import Homepage from './header/homepage';

const App = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path='/gyms' component={GymIndexContainer} />
  </div>
);

export default App;
