import React from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router-dom';

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
			    contentLabel="Modal"
			    isOpen={this.state.modalOpen}
			    onRequestClose={this.onModalClose}>
					<button onClick={this.onModalClose}>Close</button>
			    <form className="login-form">
			      Welcome! Please {this.state.formType}!

			      <br/>
			      <label>Username
			        <input type="text"
								value={this.state.username}
			          onChange={this.update("username")} />
			      </label>
			      <br/>
			      <label>Password
			        <input type="password"
								value={this.state.password}
			          onChange={this.update("password")} />
			      </label>
			      <br/>
			      <button onClick={this.handleSubmit}>
							{this.state.formType}
						</button>
			    </form>

			  </Modal>
			</div>
		);
	}
}


export default withRouter(SessionForm);
