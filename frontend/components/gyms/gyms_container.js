import { connect } from 'react-redux';
import { getAllGyms } from '../../actions/gym_actions';
import { GymsIndex } from './gyms_index';
import { allGyms } from '../../reducers/selector';

const mapStateToProps = state => ({
  gyms: allGyms(state)
});

const mapDispatchToProps = dispatch => ({
  getAllGyms: () => dispatch(getAllGyms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (GymsIndex);
