import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Rating from 'react-rating';
import SessionFormContainer from '../session/session_form_container';
import GymReview from '../gyms/gym_review';
import SampleReviews from './sample_reviews';
import SearchContainer from '../search/search_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    const { reviewId } = props.match.params;
    const review = props.reviews[reviewId];
    this.state = { rating: review && review.rating || 0,
                   body: review && review.body || "",
                   gym_id: parseInt(this.props.match.params.gymId),
                   user_id: this.props.currentUser.id,
                   id: reviewId };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.update = this.update.bind(this);
    this.getPath = this.getPath.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.getSingleGym(this.props.match.params.gymId);
    this.props.getAllReviews(this.props.match.params.gymId);
  }

  // componentWillReceiveProps(nextProps) {
  //   const {reviews} = this.props;
  //   const {match} = this.props;
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (this.getPath() === "Edit") {
      this.props.updateReview(this.state)
      .then((res) => this.props.history.push(`/gyms/${this.state.gym_id}`));
    } else {
      this.props.createReview(this.state)
      .then((res) => this.props.history.push(`/gyms/${this.state.gym_id}`));
    }
  }

  getPath() {
    return this.props.location.pathname.split("/").includes("edit") ? "Edit" : "Post";
  }

  updateRating(rating) {
    this.setState({rating})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  sessionForm() {
    return(
      <SessionFormContainer />
    );
  }

  greeting(currentUser, logout) {
    return (
      <div className="login">
          <nav className="other-login-buttons">
            <div>Welcome {this.props.currentUser.username}!</div>
            <button onClick={logout}>Log Out</button>
          </nav>
      </div>
    );
  }

  render() {
    const { reviews } = this.props;
    if (this.props.reviews === "") {
      return (<div>Here</div>)
    }
    return(
      <div className='review-form-page'>
        <section className="top-of-page">
          <div className="page-width">
            <div className="search-bar">
              <Link to={`/`}>
                OpenGym
              </Link>
                <div>
                  <SearchContainer />
                </div>
            </div>

            <div className='search-page'>
              {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
            </div>
          </div>
        </section>

        <section className="review-form">
          <div>
          <h3>Write a Review</h3>
          <ul>
            <GymReview gym={this.props.gym} />
          </ul>
          <h4>Your review</h4>
            <form className='review-form'>
              <label className="review-form">
                <Rating
                  className="new-stars"
                  initialRate={this.state.rating}
                  onChange={ this.updateRating }
                  start={0}
                  stop={5}
                  step={1}
                  empty="fa fa-star-o fa-2x"
                  full="fa fa-star fa-2x"
                /> Select your rating.
              </label>

              <label>
                <textarea
                  onChange={ this.update('body') }
                  value={ this.state.body }
                  placeholder="Your review helps others learn about great open gyms!"
                  />
              </label>
            </form>
            <button className="review"
              onClick={this.handleSubmit}>
              {this.getPath()} Review
            </button>
            <Link
              to={`/gyms/${this.state.gym_id}`}
              className="cancel">
              Cancel</Link>
          </div>
          <div className="other-reviews">
            <h4>Reviews for {this.props.gym.name}</h4>
            <ul>
              {Object.keys(reviews).map((key, idx) => <SampleReviews key={idx} review={reviews[key]} /> )}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
