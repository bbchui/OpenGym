import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getAllGyms(this.state.query)
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="search"
          placeholder="Search a City"
          value={this.state.query}
          onChange={this.update} />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }


}

export default Search;
