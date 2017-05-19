import React from 'react';
import GymIndexItem from './gyms_index_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';

class GymsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.noSearchInput = this.noSearchInput.bind(this);
  }

  componentDidMount() {
    this.props.getAllGyms();
  }

  sessionForm() { //header function
    return(
      <SessionFormContainer />
    );
  }

  currUser() { //header function
    if (this.props.currentUser) {
      return `${this.props.currentUser.username}`;
    } else {
      return "";
    }
  }

  greeting(currentUser, logout) {

    return (
      <div className="login">
          <div>Welcome {this.props.currentUser.username}</div>
          <nav className="login-buttons">
            <button onClick={logout}>Log Out</button>
          </nav>
      </div>
    );
  }

  noSearchInput() {
    const { gyms } = this.props;
    return (
      <section className="search-results-section">
        <h2 className="search-results-header">
          Browsing Gyms in San Francisco</h2>
        <ul className="search-results-list">
          {gyms.map(gym => <GymIndexItem key={gym.id} gym={gym}/>)}
        </ul>
      </section>
    )
  }

  //function for filter gyms



  render() {
    const { gyms } = this.props
    return (
      <div>
        <section className="top-of-page">
          <div>
            <Link to={`/`}>HomePage</Link>
          </div>
          <div>
            Searchbar
          </div>
          <div className='search-page'>
            {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
          </div>
        </section>


        <div>
          {this.noSearchInput()}
        </div>
      </div>
    );
  }

}

export default GymsIndex;
