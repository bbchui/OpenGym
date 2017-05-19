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

  sessionFrom() {
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



  render() {
    let { gym } = this.props;
    return(
      <div>
        //need to DRY same top-of-page as index
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

        

      </div>
    )
  }

}

export default GymShow;
