import React from 'react';
import GymIndexItem from './gyms_index_item';

class GymsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGyms();
  }

  render() {
    const { gyms } = this.props
    return (
      <section>
        <h2 className='featured'>Featured Gyms</h2>
        <ul className='featured-gyms'>
          {gyms.map(gym => <GymIndexItem key={gym.id} gym={gym}/>)}
        </ul>
      </section>
    )
  }

}

export default GymsIndex;
