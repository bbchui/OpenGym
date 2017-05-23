import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Review = (props) => {
  let link;
  if (props.currentUser && props.currentUser.id === props.review.user_id) {
    link = <Link  to={`/gyms/${props.gymId}/reviews/${props.review.id}/edit`} className="edit">
      Edit Review
    </Link>
  } else {
    link = null;
  }

  if (props.gymId === props.review.gym_id) {
    return(
      <li className="review-list">
        <div className="review-profile">
          <img className="review-profile-pic" src={props.review.image_url} alt="Image Not Working" />
          <div> { props.review.username } </div>
          {link}
        </div>
        <div className="review-body">
          <Rating
          className="stars"
          initialRate={props.review.rating}
          readonly
          empty="fa fa-star-o fa-lg"
          full="fa fa-star fa-lg"
          fractions={2}/> {props.review.date}
          <div>{props.review.body}</div>
        </div>
      </li>
    );
  } else {
    return null
  }
}

export default Review;
