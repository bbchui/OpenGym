import React from 'react';
import { Link } from 'react-router-dom';

const GymSearchItem = ({gym}) => (
  <li className="gym-info-searched">
    <img className="searched" src={gym.image_url} alt="Image Not Working" />

    <div className="gym-index-info">
      <div>
        <Link className="searched-gym-name" to={`/gyms/${gym.id}`}>
          { gym.name }
        </Link>
        <span> Rating *****
         </span>
         <span> { gym.price } </span>
      </div>

      <div>
        <span className="feature-text">
          { gym.address }
          <br/>
        { gym.city }, { gym.state } { gym.zip }
         </span>
        <span className="feature-text"> { gym.phone } </span>
        <span className="feature-text"> { gym.website} </span>
        </div>
    </div>
  </li>
)

export default GymSearchItem;
