import { connect } from 'react-redux';
import { getAllGyms } from '../../actions/gym_actions';
import { allGyms } from '../../reducers/selector';
import { logout } from '../../actions/session_actions';
import Search from './search';
import TestSearch from './test_search';
import { fetchBounds } from '../../actions/map_actions';

const mapStateToProps = (state) => ({
  gyms: allGyms(state),
  bounds: state.bounds,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllGyms: (query, bounds) => dispatch(getAllGyms(query, bounds)),
  fetchBounds: (bounds) => dispatch(fetchBounds(bounds)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (TestSearch);
