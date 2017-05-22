import { connect } from 'react-redux';
import { getAllReviews, updateReview, createReview, deleteReview } from '../../actions/review_actions';
import { logout } from '../../actions/session_actions';
import ReviewForm from './review_form';
import { getSingleGym } from '../../actions/gym_actions';
import { allReviews } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  gym: state.gym,
  gymId: ownProps.gymId,
  reviews: allReviews(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllReviews: (id) => dispatch(getAllReviews(id)),
  updateReview: (review) => dispatch(updateReview(review)),
  createReview: (review) => dispatch(createReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  getSingleGym: (gym) => dispatch(getSingleGym(gym)),
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ReviewForm);
