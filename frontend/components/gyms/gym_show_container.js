import { connect } from 'react-redux';
import { getSingleGym } from '../../actions/gym_actions';
import GymShow from './gym_show';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  gym: state.gym,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getSingleGym: (gym) => dispatch(getSingleGym(gym)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (GymShow);
