import { connect } from 'react-redux';
import { getAllGyms } from '../../actions/gym_actions';
import { allGyms } from '../../reducers/selector';
import { logout } from '../../actions/session_actions';
import Search from './search';
import TestSearch from './test_search';

const mapStateToProps = (state) => ({
  gyms: allGyms(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllGyms: (query) => dispatch(getAllGyms(query)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (TestSearch);
