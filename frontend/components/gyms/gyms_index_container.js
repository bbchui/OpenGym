import { connect } from 'react-redux';
import { getAllGyms } from '../../actions/gym_actions';
import GymsIndex from './gyms_index';
import { allGyms } from '../../reducers/selector';
import { logout } from '../../actions/session_actions';
import { fetchBounds } from '../../actions/map_actions';

const mapStateToProps = (state) => ({
  gyms: allGyms(state),
  bounds: state.bounds,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllGyms: (query) => dispatch(getAllGyms(query)),
  fetchBounds: (bounds) => dispatch(fetchBounds(bounds)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (GymsIndex);
