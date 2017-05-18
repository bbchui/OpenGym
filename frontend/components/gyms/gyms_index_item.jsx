import React from 'react';
import { Link } from 'react-router-dom';

const GymIndexItem = ({gym}) => (
      <li className="gym-info-featured">
        <img className="featured" src={gym.image_url} alt="Image Not Working" />
        <Link className="featured-gym-name" to={`/gyms/${gym.id}`}>
          { gym.name }
        </Link>
        <span> Rating
         </span>
        <span className="feature-text"> { gym.level } </span>
        <span className="feature-text"> { gym.city } </span>
      </li>
);

export default GymIndexItem;
