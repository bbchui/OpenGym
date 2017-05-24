import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class GymsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.SearchInput = this.SearchInput.bind(this);
  }

  // componentDidMount() {
  //   this.props.getAllGyms(this.props.query);
  //   console.log(this.props.query)
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps == this.props) {
      this.props.getAllGyms(nextProps.query)
    }
  }

  sessionForm() { //header function
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

  SearchInput() {
    const { gyms } = this.props;
    return (
      <section className="search-results-section">
        <h2 className="search-results-header">
          Browsing Gyms in San Francisco</h2>
        <div className="index-map">
          <ul className="search-results-list">
            {gyms.map(gym => <GymSearchItem key={gym.id} gym={gym}/>)}
          </ul>
          <div className="map">Map Goes Here</div>
        </div>
      </section>
    )
  }

  render() {
    const { gyms } = this.props
    return (
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

        <div>
          {this.SearchInput()}
        </div>

      </div>
    );
  }

}

export default GymsIndex;
