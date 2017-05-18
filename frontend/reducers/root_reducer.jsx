import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GymsReducer from './gym_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  gyms: GymsReducer
});

export default rootReducer;
