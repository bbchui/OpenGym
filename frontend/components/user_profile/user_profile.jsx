import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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
    console.log(this.props);
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

        <div>
          here
        </div>
      </div>
    )
  }
}

export default UserProfile;
