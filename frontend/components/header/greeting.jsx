import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import {withRouter} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionForm() {
    return(
      <SessionFormContainer />
    );
  }

  greeting(currentUser, logout) {
    return (
      <div>
        <h3>Welcome to OpenGym {this.props.currentUser.username}</h3>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  render() {
    return(
      <main className='header'>

        <div className='homepage'>
          {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
        </div>


      </main>
    )
  }

}


export default Greeting;
