import React from 'react';
import { Link } from 'react-router-dom';

const Review = (props) => {
  if (props.gymId === props.review.gym_id) {
    return(
      <li className="review-list">
        <div className="review-profile">
          <img className="review-profile-pic" src={props.currentUser.image_url} alt="Image Not Working" />
          <div> { props.review.username } </div>
        </div>
        <div className="review-body">
          <div>{props.review.body}</div>
        </div>
      </li>
    );
  } else {
    return null
  }
}

export default Review;
