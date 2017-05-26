import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.homeRender = this.homeRender.bind(this);
  }

  update(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getAllGyms(this.state.query)
      .then(() => {
        if (this.props.location.hash !== "/gyms") {
          this.props.history.push('/gyms')
        }
      });
  }

  homeRender() {
    if (this.props.location.pathname === "/") {
      return "home-search";
    } else {
      return "else-search";
    }
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }
        className={this.homeRender()}>
        Find
        <input type="search"
          className={this.homeRender()}
          placeholder="Search by City"
          value={this.state.query}
          onChange={this.update} />
        <button>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </form>
    )
  }


}

export default withRouter(Search);
