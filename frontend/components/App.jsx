import React from 'react';
import GreetingContainer from './header/greeting_container';
import SessionFormContainer from './session/session_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>Welcome to OpenGym!</h1>
      <GreetingContainer />
    </header>

  </div>
);

export default App;
