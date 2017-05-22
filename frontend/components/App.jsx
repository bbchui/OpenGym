import React from 'react';
import GreetingContainer from './header/greeting_container';
import SessionFormContainer from './session/session_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GymIndexContainer from './gyms/gyms_index_container';
import Homepage from './header/homepage';
import GymShowContainer from './gyms/gym_show_container';
import ReviewFormContainer from './reviews/review_form_container';

const App = () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route exact path='/gyms' component={GymIndexContainer} />
    <Route exact path='/gyms/:gymId' component={GymShowContainer} />
    <ProtectedRoute path='/gyms/:gymId/reviews/new' component={ReviewFormContainer} />
  </div>
);

export default App;
