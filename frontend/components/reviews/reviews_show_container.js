import { connect } from 'react-redux';
import { getAllReviews, updateReview, createReview, deleteReview } from '../../actions/review_actions';
import ReviewShow from './reviews_show';
import { logout } from '../../actions/session_actions';
import { allReviews } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  reviews: allReviews(state),
  gymId: ownProps.gymId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllReviews: (id) => dispatch(getAllReviews(id)),
  updateReview: (review) => dispatch(updateReview(review)),
  createReview: (review) => dispatch(createReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ReviewShow);
