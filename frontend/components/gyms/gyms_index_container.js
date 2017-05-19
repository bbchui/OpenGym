import { connect } from 'react-redux';
import { getAllGyms } from '../../actions/gym_actions';
import GymsIndex from './gyms_index';
import { allGyms } from '../../reducers/selector';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  gyms: allGyms(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllGyms: () => dispatch(getAllGyms()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (GymsIndex);
