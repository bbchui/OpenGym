import { connect } from 'react-redux';
import { getSingleGym } from '../../actions/gym_actions';
import GymShow from './gym_show';
import { logout } from '../../actions/session_actions';
import { getAllReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  gym: state.gym,
  reviews: state.reviews,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getSingleGym: (gym) => dispatch(getSingleGym(gym)),
  getAllReviews: (reviews) => dispatch(getAllReviews(reviews)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (GymShow);
