import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DropDown from './dropdown';
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (DropDown);
