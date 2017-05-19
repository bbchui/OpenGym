import React from 'react';
import GymSearchItem from './gyms_search_item';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';

class GymShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleGym(this.props.match.params.gymId);
  }

  sessionForm() {
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

  //map function?

  //review function?

  //rating function?



  //need to DRY same top-of-page as index
  render() {
    let { gym } = this.props;
    return(
      <div>
        <section className="top-of-page">
          <div className="width-check">
            <div>
              <Link to={`/`}>HomePage</Link>
                <div>
                  Searchbar
                </div>
            </div>

            <div className='search-page'>
              {this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.sessionForm()}
            </div>
          </div>
        </section>

        <section className="show-header">
          <div className="show-title">
            <h1 className="show-gym-name"> { gym.name } </h1>
            <span> ***** # of Reviews </span>
            <span> Price: { gym.price } </span>
          </div>

          <div className="show-buttons">
            <button className="show-review"> * Write a Review </button>
            <button className="add-photo"> Add Photos </button>
          </div>
        </section>

        <section className="show-images">
          <div className="map-area">
            <img className="map-photo" src="http://res.cloudinary.com/bbchui/image/upload/v1495220103/Screen_Shot_2017-05-19_at_11.54.06_AM_kn6xuw.png"/>
            <span className="address"> { gym.address } </span>
            <span className="address"> { gym.city }, { gym.state } { gym.zip } </span>
            <span> { gym.phone } </span>
            <a href={`${gym.website_url}`} className="show-link">
              {gym.website_url}
            </a>
          </div>
          <div className="show-photos-section">
            <div className="show-photos">photo here</div>
            <div className="show-photos">photo here</div>
            <div className="show-photos">photo here</div>
          </div>



        </section>


      </div>
    );
  }

}

export default GymShow;
