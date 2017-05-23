import merge from 'lodash/merge';
import { RECEIVE_ALL_REVIEWS, RECEIVE_ONE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const _defaultReview = {};

const ReviewReducer = (oldState = _defaultReview, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      // return merge({}, action.reviews);
      return action.reviews
    case RECEIVE_ONE_REVIEW:
      let newState = merge({}, oldState);
      newState[action.review.id] = action.review;
      return newState;
    case REMOVE_REVIEW:
      let newState2 = merge({}, oldState);
      delete newState2[action.review.id];
      return newState2;
    default:
      return oldState;
  }
};

export default ReviewReducer;
