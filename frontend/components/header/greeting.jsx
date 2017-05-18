import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import {withRouter} from 'react-router-dom';
import GymIndexContainer from '../gyms/gyms_index_container';

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
      return ` ${this.props.currentUser.username}!`
    } else {
      return "!"
    }
  }

  greeting(currentUser, logout) {
    return (
      <div className="login">
          <nav className="login-buttons">
            <div>
              <button className="home-review">Write a Review</button>
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

        <div className="searchbar">
          Welcome{this.currUser()} Searchbar goes here!
        </div>
        <div className='homepage'>
          {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
        </div>

        <div>
        </div>


      </div>
    )
  }

}


export default Greeting;
