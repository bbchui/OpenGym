import React from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router-dom';
import ModalStyle from './modal_style';
import FontAwesome from 'react-fontawesome';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "",
			 						 password: "",
									 modalOpen: false,
									 formType: "Log In"};
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
    const user = Object.assign({}, this.state);
    if (this.state.formType === "Log In") {
			this.props.login(this.state);
		} else {
			this.props.signup(this.state)
		}
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

	onModalOpen(formType) {
		return e => this.setState({username:"", password:"", modalOpen: true, formType});
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
		if (this.state.formType === 'Sign Up' || this.state.formType === 'Log In') {
			return(

					<button className="signup"
						onClick={this.handleGuestLogin}>
						Log in as Guest
					</button>

			)
		} else {
			return <div></div>
		}
	}

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

	writeReview() {
		if (this.props.match.path === "/") {
			return(
				<div>
					<button className="home-review">Write a Review</button>
				</div>
			)
		}
	}

	getPath() {
		if (this.props.match.path === "/") {
			return "login-buttons"
		} else {
			return "other-login-buttons"
		}
	}



	logClassName() {
		if (this.state.formType === "Sign Up") {
			return "signup"
		} else {
			return "login"
		}
	}

  render() {
    return(
			<div className="login">
			  <nav className={this.getPath()}>
					<div></div>
					<div>
				    <button id={this.getPath()} onClick={this.onModalOpen('Log In')} >Log In</button>
				    <button onClick={this.onModalOpen('Sign Up')}>Sign Up</button>
					</div>
			  </nav>

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
									style={{position: 'absolute', top: '151px', left: '318px', color: '#757575'}}/>
						</label>

			      <label className="modal">
							<br/>
			        <input type="password"
								className="modal"
								value={this.state.password}
								placeholder="Password"
			          onChange={this.update("password")} />
								<FontAwesome className="icon-one"
				            name="lock"
				            size='lg'
										style={{position: 'absolute', top: '207px', left: '319px', color: '#757575'}}/>
			      </label>
						<div>
							{this.renderErrors()}
						</div>
			      <br/>

			      <button className={this.logClassName()}
							onClick={this.handleSubmit}>
							{this.state.formType}
						</button>
						<br/>
						{this.loginGuest()}
						<br/>
						<button className={this.logClassName()} onClick={this.onModalClose}>Close
						</button>
			    </form>

			  </Modal>
			</div>
		);
	}
}


export default withRouter(SessionForm);

// <div className="modal-formtype"> Enter Your Username and Password</div>
