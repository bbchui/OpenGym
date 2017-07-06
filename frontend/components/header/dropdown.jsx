import React from 'react';
import Rating from 'react-rating';
import FontAwesome from 'react-fontawesome';
import { Link, Redirect, withRouter } from 'react-router-dom';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '', user: this.props.currentUser };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    if (this.props.user && this.props.user.user !== null) {
      this.setState({ user: this.props.user })
    }
  }


  toggleDropdown() {
    if (this.state.active === 'active') {
      this.setState({ active: '' });
    } else {
      this.setState({ active: 'active'});
    }
  }

  closeDropdown(e) {
    setTimeout(() => this.setState({ active: ''}), 200);
  }

  render() {
    // let pic = this.props.currentUser.profile_pic_url ? this.props.currentUser.profile_pic_url : this.props.currentUser.image_url;
    let pic = this.state.user.profile_pic_url ? this.state.user.profile_pic_url : this.state.user.image_url;

    return (
      <div className="splash-buttons">
        <button id="head-button" onClick={this.toggleDropdown} onBlur={this.closeDropdown}>
          <img className="button-images" src={pic}/>
          <div className="arrow-down"></div>
        </button>
        <ul className={`dropdowns ${this.state.active}`}>
          <div className="arrow-up"></div>
          <div className="dropdowns">
            <Link to={`/users/${this.props.currentUser.id}`}><img src={pic}/></Link>

            <div>
              <Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
              <span>
                <Rating
                  className="stars"
                  initialRate={1}
                  start={0}
                  stop={1}
                  readonly
                  empty="fa fa-star-o fa-lg"
                  full="fa fa-star fa-lg"/>
                {this.props.currentUser.reviews.length} Reviews
              </span>
            </div>
          </div>
          <Link className="dropdown" to={`/users/${this.props.currentUser.id}`}>
            <FontAwesome
              className="dropdown-user"
              name='user'
              size='lg'
            />
            About Me</Link>
          <a className="dropdown" onClick={this.props.logout}>
            <FontAwesome
              className="dropdown-logout"
              name='sign-out'
              size='lg'
            />
            Log Out</a>
        </ul>

      </div>
    )
  }


}

export default withRouter(DropDown);
