import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  loginLinks() {
    return (
      <div>
        <Link to="/login">Login</Link>
        &nbsp;
        <Link to="/signup">Sign Up</Link>
      </div>
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
    let header;
    let currentUser = this.props.currentUser

    if (currentUser) {
      header = this.greeting(this.props.currentUser, this.props.logout)
    } else {
      header = this.loginLinks()
    }

    return(
      <div>
        { header }
      </div>
    )
  }

}


export default Greeting;
