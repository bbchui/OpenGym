import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import Rating from 'react-rating';
import DropDownContainer from '../header/dropdown_container';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "eshsnuwt"
const CLOUDINARY_UPLOAD_URL =	'https://api.cloudinary.com/v1_1/bbchui/upload';

class EditUserPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profile_pic_url: '', userId: this.props.currentUser.id};
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.props.fetchUser(this.props.match.params.userId);
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

    upload.end((err, response) => {
      if (err) {
       console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          profile_pic_url: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state)
      .then((res) => this.props.history.push(`/users/${this.props.currentUser.id}`))
    // this.props.currentUser.profile_pic_url = this.state.profile_pic_url;

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
            <button className="logout-button" onClick={logout}>Log Out</button>
            <DropDownContainer />
          </nav>
      </div>
    );
  }

  showImage() {
    if (this.state.profile_pic_url === '') {
      return null;
    } else {
      return(
        <div>
          <img id="bordergoaway" src={this.state.profile_pic_url} />
          <button onClick={this.handleSubmit}>Update Profile Picture</button>
        </div>
      )
    }
  }

  render() {
    let { user } = this.props;
    let reviewsCount = user.reviews ? user.reviews.length : undefined;
    let pic = user.profile_pic_url ? user.profile_pic_url : user.image_url
    let reviews = user.reviews ? user.reviews : [];
    let currentUser = this.props.currentUser ? this.props.currentUser : null;

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

        <section className="edit-user-photo">
          <div>
            <Link to={`/users/${this.props.currentUser.id}`}>
              {this.props.currentUser.username}
            </Link> &nbsp;&nbsp;>&nbsp;&nbsp; Profile photos
          </div>
          <strong>Edit Photo</strong>
        </section>

        <section className="photo-area">
          <Dropzone
            className="user-dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <span>
              Drag and drop your photo here
            </span>
            <div>
              <span>OR</span>
            </div>
            <button>Browse Files</button>
          </Dropzone>
          <div className="photo-areas">
            {this.showImage()}
          </div>
        </section>
      </div>
    )
  }
}

export default EditUserPic;
