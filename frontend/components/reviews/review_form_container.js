import { connect } from 'react-redux';
import { getAllReviews, updateReview, createReview, deleteReview } from '../../actions/review_actions';
import { logout } from '../../actions/session_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
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
  (ReviewForm);
