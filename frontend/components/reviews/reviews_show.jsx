import React from 'react';
import { Link } from 'react-router-dom';
import Review from './review';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllReviews(this.props.gymId);
  }

  // gymReviews() {
  //   let gym = this.props.match.params.gymId
  //   if (true) {
  //
  //   }
  // }

  render() {
    const { reviews } = this.props;
    let currentUser;
    if (this.props.currentUser !== null) {
      currentUser = this.props.currentUser.id;
    }
    if (this.props.reviews === "") {
      return (<div>Here</div>)
    }
    return (

      <div>
        <ul>
          {reviews.map(review => <Review key={`0 + ${review.id}`} review={review} gymId={this.props.gymId} currentUser={currentUser}/>)}
        </ul>




      </div>
    );
  }
}

export default ReviewShow;
