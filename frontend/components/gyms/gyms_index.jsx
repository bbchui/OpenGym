import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import GymIndexMap from '../map/gym_index_map';

class GymsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.SearchInput = this.SearchInput.bind(this);
  }

  // componentDidMount() {
  //   this.props.getAllGyms(this.props.query);
  //   console.log(this.props.query)
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps, this.props);
  //   if (nextProps == this.props) {
  //     this.props.getAllGyms(nextProps.query)
  //   }
  // }

  sessionForm() { //header function
    return(
      <SessionFormContainer />
    );
  }


  greeting(currentUser, logout) {
    return (
      <div className="login">
          <nav className="other-login-buttons">
            <div>Welcome <strong>{this.props.currentUser.username}</strong>!</div>
            <button onClick={logout}>Log Out</button>
          </nav>
      </div>
    );
  }

  // SearchInput() {
  //   const { gyms } = this.props;
  //   let name;
  //   gyms[0] ? name = gyms[0].city : "San Francisco";
  //   return (
  //     <section className="search-results-section">
  //       <h2 className="search-results-header">
  //         Browsing Gyms near {name}</h2>
  //       <div className="index-map">
  //         <ul className="search-results-list">
  //           {gyms.map(gym => <GymSearchItem key={gym.id} gym={gym}/>)}
  //         </ul>
  //         <div className="map-style"><GymIndexMap gyms={gyms} /></div>
  //       </div>
  //     </section>
  //   )
  // }

  render() {
    const { gyms } = this.props
      gyms[0] ? name = gyms[0].city : "San Francisco";
    return (
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

        <div>
          <section className="search-results-section">
            <h2 className="search-results-header">
              Browsing Gyms near {name}</h2>
            <div className="index-map">
              <ul className="search-results-list">
                {gyms.map(gym => <GymSearchItem key={gym.id} gym={gym}/>)}
              </ul>
              <div className="map-style"><GymIndexMap gyms={gyms} /></div>
            </div>
          </section>
        </div>


      </div>
    );
  }

}

export default GymsIndex;
