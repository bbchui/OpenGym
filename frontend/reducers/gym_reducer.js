import merge from 'lodash/merge';
import { RECEIVE_ALL_GYMS, RECEIVE_SINGLE_GYM } from '../actions/gym_actions';

const GymsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_GYMS:
      return merge({}, action.gyms);
    default:
      return oldState;
  }
};

export default GymsReducer;
