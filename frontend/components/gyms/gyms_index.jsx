import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import GymIndexMap from '../map/gym_index_map';
import DropDownContainer from '../header/dropdown_container';

class GymsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.searchName = this.searchName.bind(this);
    // this.SearchInput = this.SearchInput.bind(this);
    // console.log(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

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
          <nav className="logout-buttons">
            <button className="logout-button" onClick={logout}>Log Out</button>
            <DropDownContainer />
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

  searchName() {
    // console.log(this.props);
    if (this.props.bounds.address_components && this.props.gyms.length < 1) {
      return (
        <h2 className="search-results-header">
          <div>No Open Gyms in {this.props.bounds.address_components[0].long_name}</div>
        </h2>
      );
    }
    else if (this.props.bounds.address_components) {
      return (
        <h2 className="search-results-header">
          <div>Browsing Gyms near {this.props.bounds.address_components[0].long_name}</div>
        </h2>
      );
    } else {
      return(
        <h2 className="search-results-header">
          <div>Search for Open Gyms!</div>
        </h2>
      );
    }
  }



  render() {
    const { gyms } = this.props;
    const { bounds } = this.props;
    // debugger
      // gyms[0] ? name = gyms[0].city : "San Francisco";
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

        {this.searchName()}
        <div>
          <section className="search-results-section">
            <div className="index-map">
              <ul className="search-results-list">
                {gyms.map(gym => <GymSearchItem key={gym.id} gym={gym}/>)}
              </ul>
              <div className="map-style"><GymIndexMap gyms={gyms} bounds={bounds} /></div>
            </div>
          </section>
        </div>


      </div>
    );
  }

}

export default GymsIndex;
