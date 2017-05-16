import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout} from './actions/session_actions';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.login = login;
  window.signup = signup;
  window.logout = logout;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to OpenGym</h1>, root);
});
