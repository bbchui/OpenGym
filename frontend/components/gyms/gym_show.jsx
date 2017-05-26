import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import ReviewShowContainer from '../reviews/reviews_show_container';
import FontAwesome from 'react-fontawesome';
import SearchContainer from '../search/search_container';
import Rating from 'react-rating';
import GymMap from '../map/gym_map';

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

  handleCreate(e) {
    e.preventDefault();
    this.props.history.push(`/gyms/${this.props.gym.id}/reviews/new`);
  }

  reviewButton() {
    if (this.props.currentUser) {
      return (
        <button
          onClick={this.handleCreate}
          className="show-review">
          <FontAwesome className="fa fa-star"
            name="star"
            size='lg'/>
           Write a Review </button>
      )
    } else {
      return (
        <button
          className="cant-review" disabled>
          <FontAwesome className="fa fa-star"
            name="star"
            size='lg'/>
          Log In To Review! </button>
      )
    }
  }

  // randomImage(images) {
  //   if (images.length < 4) {
  //     images
  //   } else {
  //     for (var i = images.length; i > 0; i--) {
  //       let j = Math.floor(Math.random() * i);
  //       [images[i - 1], images[j]] = [images[j], images[i - 1]];
  //     }
  //   }
  //   return (
  //     <div>
  //     <img className="showpage-photo" src={images[0]} alt="Image Not Working" />
  //     <img className="showpage-photo" src={images[1]} alt="Image Not Working" />
  //     <img className="showpage-photo" src={images[2]} alt="Image Not Working" />
  //     </div>
  //   )
  // }
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
              <Link to={`/`} className="top-logo">
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
            {this.reviewButton()}
            <button className="add-photo"> Add Photos </button>
          </div>
        </section>

        <section className="show-images">
          <div className="map-area">
            <GymMap gym={gym}/>
            <span className="address"> { gym.address } </span>
            <span className="address"> { gym.city }, { gym.state } { gym.zip } </span>
            <span> { gym.phone } </span>
            <a href={`http://${gym.website_url}`} className="show-link">
              {gym.website_url}
            </a>
          </div>
          <div className="show-photos-section">
            <img className="showpage-photo" src={gym.image_url[0]} alt="Image Not Working" />
            <img className="showpage-photo" src={gym.image_url[1]} alt="Image Not Working" />
            <img className="showpage-photo" src={gym.image_url[2]} alt="Image Not Working" />
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
