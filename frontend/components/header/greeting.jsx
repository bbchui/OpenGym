import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import {withRouter} from 'react-router-dom';
import FeaturedGymsIndex from './featured_gyms_index';
import SearchContainer from '../search/search_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="login">
          <nav className="login-buttons">
            <div>

            </div>
            <div>
              <button onClick={logout}>Log Out</button>
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


export default Greeting;
