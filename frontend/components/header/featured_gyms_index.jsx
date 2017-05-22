import React from 'react';
import GymFeatureItem from '../gyms/gyms_feature_item';

class FeaturedGymsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGyms();
  }


  render() {
    const { gyms } = this.props;
    return (
      <section>
        <h2 className='featured'>Featured Gyms</h2>
        <ul className='featured-gyms'>
          {gyms.map(gym => <GymFeatureItem key={gym.id} gym={gym}/>)}
        </ul>
      </section>
    )
  }

}

export default FeaturedGymsIndex;
