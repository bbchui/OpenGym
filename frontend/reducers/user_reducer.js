import merge  from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const _defaultState = { user: null}

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user)
    default:
      return oldState
  }
}

export default UserReducer;
