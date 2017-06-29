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
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="login">
        <button
          onClick={this.onModalOpen()}
          className="cant-review">
          <FontAwesome className="fa fa-star"
            name="star"
            size='lg'/>
          Login to Review </button>

        <Modal
          style={ModalStyle}
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          onAfterOpen={this.onTransition}>

          <form className="login-form">
			      <div className="modal-welcome"><strong className="logo">OpenGym</strong>


						</div>

			      <label className="modal">
							<br/>
			        <input type="text"
								className="modal"
								value={this.state.username}
								placeholder="Username"
			          onChange={this.update("username")} />
							<FontAwesome className="icon-one"
			            name="user-o"
			            size='lg'
									style={{position: 'absolute', top: '141px', left: '318px', color: '#757575'}}/>
						</label>

			      <label className="modal">

			        <input type="password"
								className="modal"
								value={this.state.password}
								placeholder="Password"
			          onChange={this.update("password")} />
								<FontAwesome className="icon-one"
				            name="lock"
				            size='lg'
										style={{position: 'absolute', top: '190px', left: '320px', color: '#757575'}}/>
			      </label>
						<div>
							{this.renderErrors()}
						</div>
			      <br/>

			      <button className="login"
							onClick={this.handleSubmit}>
							Login
						</button>

						{this.loginGuest()}

						<button className="login" onClick={this.onModalClose}>Close
						</button>
			    </form>

        </Modal>
      </div>
    )
  }


}

export default withRouter(LoginForm);
