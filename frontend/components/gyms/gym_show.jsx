import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import ReviewShowContainer from '../reviews/reviews_show_container';
import FontAwesome from 'react-fontawesome';
import SearchContainer from '../search/search_container';
import Rating from 'react-rating';

class GymShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.sessionForm = this.sessionForm.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.getSingleGym(this.props.match.params.gymId);
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

  //map function?

  handleCreate(e) {
    e.preventDefault();
    this.props.history.push(`/gyms/${this.props.gym.id}/reviews/new`);
  }

  //need to DRY same top-of-page as index
  render() {
    let { gym } = this.props;
    let gymId = parseInt(this.props.match.params.gymId);
    if (!gymId) {
      return null;
    }
    let { reviews } = this.props.gym;
    let averageRating;
    let reviewCount;
    if (reviews) {
      averageRating = reviews.reduce((sum, el) => sum += el.rating, 0) / reviews.length;
      reviewCount = reviews.length;
    }
    return(
      <div>
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

        <section className="show-header">
          <div className="show-title">
            <h1 className="show-gym-name"> { gym.name } </h1>
            <span>
              <Rating
              className="stars"
              initialRate={averageRating}
              readonly
              empty="fa fa-star-o fa-lg"
              full="fa fa-star fa-lg"
              fractions={2}/>
              &nbsp;{reviewCount} Reviews
             </span>
            <span> Price: { gym.price } </span>
          </div>

          <div className="show-buttons">
            <button
              onClick={this.handleCreate}
              className="show-review">
              <FontAwesome
                className="fa fa-star"
                name="star"
                size='lg'
                spin
                  />
               Write a Review
            </button>
            <button className="add-photo"> Add Photos </button>
          </div>
        </section>

        <section className="show-images">
          <div className="map-area">
            <img className="map-photo" src="http://res.cloudinary.com/bbchui/image/upload/v1495220103/Screen_Shot_2017-05-19_at_11.54.06_AM_kn6xuw.png"/>
            <span className="address"> { gym.address } </span>
            <span className="address"> { gym.city }, { gym.state } { gym.zip } </span>
            <span> { gym.phone } </span>
            <a href={`http://${gym.website_url}`} className="show-link">
              {gym.website_url}
            </a>
          </div>
          <div className="show-photos-section">
            <img className="showpage-photo" src={gym.image_url} alt="Image Not Working" />
            <div className="show-photos">photo here</div>
            <div className="show-photos">photo here</div>
          </div>
        </section>

        <div className="review-hours">
          <section className="review-section">
            <h2>
              <strong>Recommended Reviews</strong> for { gym.name }
            </h2>
            <ReviewShowContainer gymId={gymId}/>
          </section>
          <section className="hours-section">
            <span> <strong>Price:</strong> { gym.price } </span>
            <span> <strong>Level:</strong> { gym.level } </span>
            <span> <strong>Gym Hours:</strong>
              <br/>
              { gym.hours }
            </span>
          </section>
        </div>
      </div>
    );
  }
}

export default GymShow;
