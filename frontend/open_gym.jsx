import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

import { getAllGyms, getSingleGym } from './actions/gym_actions';
import { fetchBounds } from './util/map_api_util'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // delete later
  window.store = store;
  window.getAllGyms = getAllGyms;
  window.getSingleGym = getSingleGym;
  window.fetchBounds = fetchBounds

  const root = document.getElementById('root');

  Modal.setAppElement(document.body)
  ReactDOM.render(<Root store={ store }/>, root);
});
