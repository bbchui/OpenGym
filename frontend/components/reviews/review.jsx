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
  let pic;
  if (props.review.profile_pic_url) {
    pic = props.review.profile_pic_url;
  } else {
    pic = props.review.image_url;
  }

  if (props.gymId === props.review.gym_id) {
    return(
      <li className="review-list">
        <div className="review-profile">
          <img className="review-profile-pic" src={pic} alt="Image Not Working" />
            <Link className="showpage-review-name" to={`/users/${props.review.user_id}`}>
              { props.review.username }
            </Link>
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
