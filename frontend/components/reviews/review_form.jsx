import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Rating from 'react-rating';
import SessionFormContainer from '../session/session_form_container';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0,
                   body: "",
                   gym_id: parseInt(this.props.match.params.gymId),
                   user_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
      .then((res) => this.props.history.push(`/gyms/${this.state.gym_id}`));
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
    return(
      <div className='review-form-page'>
        <section className="top-of-page">
          <div className="width-check">
            <div>
              <Link to={`/`}>HomePage</Link>
                <div>
                  Searchbar
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
            <form className='review-form'> Your review
              <label>
                <Rating
                  className="stars"
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

              <button className="review"
                onClick={this.handleSubmit}>
                Post Review
              </button>
            </form>
          </div>
          <div className="other-reviews">Other reviews</div>
        </section>


      </div>
    )
  }
}

export default withRouter(ReviewForm);
