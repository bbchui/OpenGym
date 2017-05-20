import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_ONE_REVIEW = "RECEIVE_ONE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveOneReview = review => ({
  type: RECEIVE_ONE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
})

export const getAllReviews = () => dispatch => (
  ReviewApiUtil.getAllReviews()
    .then(_reviews => dispatch(receiveAllReviews(_reviews)))
);

export const updateReview = (review) => dispatch => (
  ReviewApiUtil.updateReview(review)
    .then(_review => dispatch(receiveOneReview(_review)))
);

export const createReview = (review) => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(_review => dispatch(receiveOneReview(_review)))
);

export const deleteReview = (review) => dispatch => (
  ReviewApiUtil.deleteReview(review)
    .then(_review => dispatch(removeReview(_review)))
);
