import { merge } from 'lodash';
import { RECEIVE_BOUNDS } from '../actions/map_actions';

const sfBounds = { northeast: { lat: 37.9298239, lng: -122.28178 },
                    southwest: { lat: 37.6398299, lng: -123.173825 } }

const MapReducer = (oldState = sfBounds, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOUNDS:
      return action.bounds;
    default:
      return oldState;
  }
}

export default MapReducer;
