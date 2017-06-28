import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GymsReducer from './gym_reducer';
import SingleGymReducer from './single_gym_reducer';
import ReviewReducer from './review_reducer';
import MapReducer from './map_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  gyms: GymsReducer,
  gym: SingleGymReducer,
  reviews: ReviewReducer,
  bounds: MapReducer,
  user: UserReducer
});

export default rootReducer;
