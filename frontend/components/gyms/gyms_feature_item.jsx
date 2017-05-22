import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const GymFeatureItem = ({gym}) => {
  let averageRating = gym.reviews.reduce((sum, el) => sum += el.rating, 0) / gym.reviews.length;
  return  (
      <li className="gym-info-featured">
        <img className="featured" src={gym.image_url} alt="Image Not Working" />
        <Link className="featured-gym-name" to={`/gyms/${gym.id}`}>
          { gym.name }
        </Link>
        <Rating
          initialRate={averageRating}
          readonly
          empty="fa fa-star-o fa-2x"
          full="fa fa-star fa-2x"
          fractions={2}/>
        <span className="feature-text"> { gym.level } </span>
        <span className="feature-text"> { gym.city } </span>
      </li>
    );
}
export default GymFeatureItem;
