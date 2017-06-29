import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import Rating from 'react-rating';
import UserReviews from './user_reviews';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  sessionForm() { //header function
    return(
      <SessionFormContainer />
    );
  }


  greeting(currentUser, logout) {
    return (
      <div className="login">
          <nav className="logout-buttons">
            <div>Welcome <br></br> <strong>{this.props.currentUser.username}</strong>!</div>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </nav>
      </div>
    );
  }

  render() {
    let { user } = this.props;
    let reviewsCount = user.reviews ? user.reviews.length : undefined;
    let pic = user.profile_pic_url ? user.profile_pic_url : user.image_url
    let reviews = user.reviews ? user.reviews : [];

    return(
      <div>
        <section className="top-of-page">
          <div className="page-width">
            <div className="search-bar">
              <Link to={`/`} className="top-logo">
                OpenGym
              </Link>
                <div> <SearchContainer /> </div>
            </div>
            <div className='search-page'>
              {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
            </div>
          </div>
        </section>

        <section className="user-profile">
          <div>
            <img className="user-profile" src={pic} alt="Image Loading" />
            <div>
              <span className="profile-name">{user.username}</span>
              <span className="profile-reviews">
                <Rating
                className="stars"
                initialRate={1}
                start={0}
                stop={1}
                readonly
                empty="fa fa-star-o fa-lg"
                full="fa fa-star fa-lg"/>
              &nbsp; {reviewsCount} Reviews</span>
            </div>
          </div>
        </section>

        <section className="profile-reviews">
          <div className="username-profile">
            {user.username}'s Profile
          </div>
          <div className="profile-reviews-list">
            <span className="review-profile">Reviews</span>
            <ul className="profile">
              {reviews.map((review, idx) => {
                return(
                  <UserReviews key={idx+"userReviews"} review={review} />
                  )
              })}
            </ul>
            
        </div>
        </section>


      </div>
    )
  }
}

export default UserProfile;

// {Object.keys(reviews).map((key, idx) => {
//   <UserReviews key={idx+"userReviews"} review={reviews[key]} />
// })}
