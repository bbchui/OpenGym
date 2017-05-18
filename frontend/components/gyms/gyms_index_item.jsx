import React from 'react';

const GymIndexItem = ({gym}) => (
      <li className="gym-info-featured">
        <img className="featured" src={gym.image_url} alt="Not Working" />
        <span> { gym.name } </span>
        <span> Rating </span>
        <span> { gym.level } </span>
        <span> { gym.city } </span>
      </li>
);

export default GymIndexItem;
