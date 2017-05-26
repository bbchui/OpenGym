import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const SampleReviews = ({review}) => {
  let pic;
  if (review.profile_pic_url) {
    pic = review.profile_pic_url;
  } else {
    pic = review.image_url;
  }

  return(
    <li className="review-sample">
      <div>
        <img className="sample-image"
            src={pic}
            alt="Image Not Working" />
        <div> { review.username } </div>
      </div>
      <div className="review-body">
        <Rating
        className="stars"
        initialRate={review.rating}
        readonly
        empty="fa fa-star-o fa-lg"
        full="fa fa-star fa-lg"
        fractions={2}/> &nbsp;{review.date}
      </div>
      <div>
        {review.body}
      </div>
    </li>
  )
}

export default SampleReviews;
