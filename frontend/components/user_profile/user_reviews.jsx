import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const UserReviews = ({review, user}) => {
  let city = review.gym.city;
  let state = review.gym.state;
  let zip = review.gym.zip;
  let edit = null;
  if (user && user.id === review.review.user_id) {
    edit = <Link to={`/gyms/${review.gym.id}/reviews/${review.review.id}/edit`} className="profile-review-edit">
      Edit Review
    </Link>
  } else {
    edit
  }

  return(
    <li className="profile">
      <div className="split-links">
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
          {edit}
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
