import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const UserReviews = ({review}) => {
  let pic = review.gym.image_url[0];
  let gym = review.gym.name;
  let rating = review.review.rating;
  let date = review.review.date;
  let body = review.review.body;

  return(
    <li className="review-sample">
      <div>
        <img className="sample-image"
            src={pic}
            alt="Image Not Working" />
          <div> { gym } </div>
      </div>
      <div className="review-body">
        <Rating
        className="stars"
        initialRate={rating}
        readonly
        empty="fa fa-star-o fa-lg"
        full="fa fa-star fa-lg"
        fractions={2}/> &nbsp;{date}
      </div>
      <div>
        {body}
      </div>
    </li>
  )
}

export default UserReviews;
