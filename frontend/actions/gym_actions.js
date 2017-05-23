import * as GymApiUtil from '../util/gym_api_util';

export const RECEIVE_ALL_GYMS = "RECEIVE_ALL_GYMS";
export const RECEIVE_SINGLE_GYM = "RECEIVE_SINGLE_GYM";

export const receiveAllGyms = gyms => ({
  type: RECEIVE_ALL_GYMS,
  gyms
});

export const receiveSingleGym = gym => ({
  type: RECEIVE_SINGLE_GYM,
  gym
});

export const getAllGyms = (query) => dispatch => (
  GymApiUtil.getAllGyms(query)
    .then(_gyms => dispatch(receiveAllGyms(_gyms)))
);

export const getSingleGym = gym => dispatch => (
  GymApiUtil.getSingleGym(gym)
    .then(_gym => dispatch(receiveSingleGym(_gym)))
);
