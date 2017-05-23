import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getAllGyms } from '../../actions/gym_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getAllGyms: (query) => dispatch(getAllGyms(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Greeting);
