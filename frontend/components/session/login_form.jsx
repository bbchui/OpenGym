import React from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router-dom';
import ModalStyle from './modal_style';
import FontAwesome from 'react-fontawesome';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
                  password: "",
                  modalOpen: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
		this.onModalOpen = this.onModalOpen.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
		this.onTransition = this.onTransition.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  onModalOpen() {
    return e => this.setState({username:"", password:"", modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
    this.props.clearErrors();
    ModalStyle.content.opacity = 0;
  }

  onTransition() {
    ModalStyle.content.opacity = 100;
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.guestLogin();
  }

  loginGuest() {
    return(
      <button className="signup"
        onClick={this.handleGuestLogin}>
        Log in as Guest
      </button>
    );
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`errors-${i}`}>{error}</li>
        ))};
      </ul>
    );
  }

  render() {
    return(
      <div>
        <Modal
          style={ModalStyle}
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          onAfterOpen={this.onTransition}>
        </Modal>
      </div>
    )
  }


}

export default withRouter(LoginForm);
