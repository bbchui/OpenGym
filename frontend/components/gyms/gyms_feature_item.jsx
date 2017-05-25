import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const GymFeatureItem = ({gym}) => {
  let averageRating = gym.reviews.reduce((sum, el) => sum += el.rating, 0) / gym.reviews.length;
  return  (
      <li className="gym-info-featured">
        <img className="featured"  src={gym.image_url[0]} alt="Image Not Working" />
        <Link className="featured-gym-name" to={`/gyms/${gym.id}`}>
          { gym.name }
        </Link>
        <span>
          <Rating
          className="stars"
          initialRate={averageRating}
          readonly
          empty="fa fa-star-o fa-lg"
          full="fa fa-star fa-lg"
          fractions={2}/>
        </span>
        <span className="feature-text"> { gym.level } </span>
        <span className="feature-text"> { gym.city } </span>
      </li>
    );
}
export default GymFeatureItem;
