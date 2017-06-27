import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_ONE_REVIEW = "RECEIVE_ONE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

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
});

export const receiveErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const getAllReviews = (id) => dispatch => (
  ReviewApiUtil.getAllReviews(id)
    .then(_reviews => dispatch(receiveAllReviews(_reviews)))
);

export const updateReview = (review) => dispatch => (
  ReviewApiUtil.updateReview(review)
    .then(_review => dispatch(receiveAllReviews(_review)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createReview = (review) => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(_review => dispatch(receiveOneReview(_review)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteReview = (review) => dispatch => (
  ReviewApiUtil.deleteReview(review)
    .then(_review => dispatch(removeReview(_review)))
);
