import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import FeaturedGymsIndex from './featured_gyms_index';
import SearchContainer from '../search/search_container';
import Rating from 'react-rating';
import FontAwesome from 'react-fontawesome';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: ''};
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.active === 'active') {
      this.setState({ active: '' });
    } else {
      this.setState({ active: 'active'});
    }
  }

  closeDropdown(e) {
    setTimeout(() => this.setState({ active: ''}), 200);
  }

  sessionForm() {
    return(
      <SessionFormContainer />
    );
  }

  currUser() {
    if (this.props.currentUser) {
      return ` $<strong>{this.props.currentUser.username}!</strong>`
    } else {
      return "!"
    }
  }
  greeting(currentUser, logout) {
    // write a review goes between the div
    let pic = currentUser.profile_pic_url ? currentUser.profile_pic_url : currentUser.image_url;
    return (
      <div className="login">
          <nav className="login-buttons">
            <div>

            </div>
            <div className="splash-buttons">
              <button className="other-login-buttons" onClick={logout}>Log Out</button>
              <button id="profile-button" onClick={this.toggleDropdown} onBlur={this.closeDropdown}>
                <img className="button-image" src={pic}/>
                <div className="arrow-down"></div>
              </button>
              <ul className={`dropdown ${this.state.active}`}>
                <div className="arrow-up"></div>
                <div className="dropdown">
                  <Link to={`/users/${this.props.currentUser.id}`}><img src={pic}/></Link>

                  <div>
                    <Link to={`/users/${this.props.currentUser.id}`}>{currentUser.username}</Link>
                    <span>
                      <Rating
                        className="stars"
                        initialRate={1}
                        start={0}
                        stop={1}
                        readonly
                        empty="fa fa-star-o fa-lg"
                        full="fa fa-star fa-lg"/>
                      {currentUser.reviews.length} Reviews
                    </span>
                  </div>
                </div>
                <Link className="dropdown" to={`/users/${this.props.currentUser.id}`}>
                  <FontAwesome
                    className="dropdown-user"
                    name='user'
                    size='lg'
                  />
                  About Me</Link>
                <a className="dropdown" onClick={logout}>
                  <FontAwesome
                    className="dropdown-logout"
                    name='sign-out'
                    size='lg'
                  />
                  Log Out</a>
              </ul>

            </div>
          </nav>
      </div>
    );
  }


  render() {
    return(
      <div className='header'>

        <div className='homepage'>
          {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()};
          <div className="header-logo"><strong>OpenGym</strong>
            <br/><br/>
            Find a Volleyball Open Gym Near You!
          </div>
          <SearchContainer />
        </div>

      </div>
    )
  }

}


export default withRouter(Greeting);
