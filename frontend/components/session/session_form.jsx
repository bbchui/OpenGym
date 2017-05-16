import React from 'react';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.setState({ username: "", password: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    let submitButton;
    if (this.props.formType === 'login'){
      submitButton = 'Login';
    } else {
      submitButton = 'Sign Up';
    }

    return(
      <form onSubmit={this.handleSubmit}>
        Welcome! Please {submitButton}!
        {this.renderErrors()}
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
        <input type="submit" value={`${submitButton}`} />

      </form>
    )
  }

}

export default SessionForm;
