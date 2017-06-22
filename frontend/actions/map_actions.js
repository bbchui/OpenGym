import * as MapApiUtil from '../util/map_api_util';

export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';

export const receiveBounds = bounds => ({
  type: RECEIVE_BOUNDS,
  bounds: bounds
});

export const fetchBounds = bounds => dispatch => {

  return (
  MapApiUtil.fetchBounds(bounds)
    .then(cityData => {
      dispatch(receiveBounds(cityData.results[0].geometry))
    })
  );
}
