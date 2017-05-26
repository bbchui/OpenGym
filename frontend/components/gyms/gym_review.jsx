import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const GymReview = ({gym}) => {
  if (!gym.id) {
    return null;
  }
  return (
    <li className='review-summary'>
        <img src={gym.image_url[0]} alt="Image Not Working"
          />
      <div>
        <Link to={`/gyms/${gym.id}`}> { gym.name } </Link>
        <span> { gym.address } </span>
        <span> { gym.city}, { gym.state } { gym.zip } </span>
      </div>

    </li>
  );
}

export default GymReview;
