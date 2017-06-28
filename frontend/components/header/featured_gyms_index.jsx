import React from 'react';
import GymFeatureItem from '../gyms/gyms_feature_item';

class FeaturedGymsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGyms("featured");
  }

  featuredGyms(gyms) {
    for (var i = gyms.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [gyms[i - 1], gyms[j]] = [gyms[j], gyms[i - 1]];
    }
    return gyms
  }


  render() {
    const { gyms } = this.props;
    return (
      <section>
        <h2 className='featured'>Featured Gyms</h2>
        <ul className='featured-gyms'>
          {this.featuredGyms(gyms).map(gym => <GymFeatureItem key={gym.id} gym={gym}/>)}
        </ul>
      </section>
    )
  }

}

export default FeaturedGymsIndex;
