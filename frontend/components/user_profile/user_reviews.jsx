import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const UserReviews = ({review}) => {
  // let pic = review.gym.image_url[0];
  // let gym = review.gym.name;
  // let address = review.gym.address;
  // let rating = review.review.rating;
  // let date = review.review.date;
  // let body = review.review.body;
  let city = review.gym.city;
  let state = review.gym.state;
  let zip = review.gym.zip;
  let price = review.gym.price

  return(
    <li className="profile">
      <div className="picture-address">
        <img className="profile-review-image"
            src={review.gym.image_url[0]}
            alt="Image Not Working" />
        <div className="profile-review-info">
          <Link className="profile-gym-name" to={`/gyms/${review.gym.id}`}>
            { review.gym.name }
          </Link>
          <span>{review.gym.price}</span>
          <span>{review.gym.address}</span>
          <span>{city}, {state} {zip}</span>
        </div>
      </div>
      <br/>
      <div className="profile-review-body">
        <Rating
        className="stars"
        initialRate={review.review.rating}
        readonly
        empty="fa fa-star-o fa-lg"
        full="fa fa-star fa-lg"
        fractions={2}/> &nbsp;{review.date}
      </div>
      <br/>
      <div className="profile-review-comment">
        {review.review.body}
      </div>
    </li>
  )
}

export default UserReviews;
