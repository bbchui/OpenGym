import merge from 'lodash/merge';
import { RECEIVE_SINGLE_GYM } from '../actions/gym_actions';

const _defaultGym = {
"name": "",
"address": "",
"city": "",
"state": "",
"zip": "",
"level": "",
"price": "",
"hours": "",
"phone": "",
"website_url": "",
"image_url": ""
}

const SingleGymReducer = (oldState = _defaultGym, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SINGLE_GYM:
      return merge({}, action.gym);
    default:
      return oldState;
  }
};

export default SingleGymReducer;
