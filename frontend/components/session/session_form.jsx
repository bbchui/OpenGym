import React from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router-dom';
import ModalStyle from './modal_style';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "",
			 						 password: "",
									 modalOpen: true,
									 formType: "Log In"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
		this.onModalOpen = this.onModalOpen.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
		this.onTransition = this.onTransition.bind(this);
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
		ModalStyle.content.opacity = 0;
	}

	onTransition() {
		ModalStyle.content.opacity = 100;
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

  render() {

    return(
			<div className="login">
			  <nav className="login-buttons">
			    <button onClick={this.onModalOpen('Log In')} >Log In</button>
			    <button onClick={this.onModalOpen('Sign Up')}>Sign Up</button>
			  </nav>

			  <Modal
					style={ModalStyle}
			    contentLabel="Modal"
			    isOpen={this.state.modalOpen}
			    onRequestClose={this.onModalClose}
					onAfterOpen={this.onTransition}>
			    <form className="login-form">
			      <div className="modal-welcome">Welcome to OpenGym!
								<br/>
								<div className="modal-formtype"> Enter Your Username and Password</div>
						</div>

			      <label className="modal">
							<br/>
			        <input type="text"
								className="modal"
								value={this.state.username}
								placeholder="Username"
			          onChange={this.update("username")} />

			      </label>
			      <label className="modal">
							<br/>
			        <input type="password"
								className="modal"
								value={this.state.password}
								placeholder="Password"
			          onChange={this.update("password")} />
			      </label>
			      <br/>
			      <button className="signup"
							onClick={this.handleSubmit}>
							{this.state.formType}
						</button>
						<br/>
						<button className="signup" onClick={this.onModalClose}>Close
						</button>
			    </form>

			  </Modal>
			</div>
		);
	}
}


export default withRouter(SessionForm);
