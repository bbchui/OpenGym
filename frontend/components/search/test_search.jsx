import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class TestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", location: ""};
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.getBounds = this.getBounds.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    autocomplete.addListener('place_changed', () => {
      // console.log(autocomplete.getPlace());
      const place = autocomplete.getPlace().name;
      this.handleAutocomplete(place);
    });
    google.maps.event.addDomListener(document.getElementById('txtPlaces'), 'keydown', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }

  handleAutocomplete(place) {
    this.props.fetchBounds(place).then(() => {
      console.log(this.props.bounds);
      // debugger
      this.props.getAllGyms("debugger", this.props.bounds)
    })

    this.setState({query: place});
    this.handleFormSubmit();
    // this.clearSearch();
    // debugger
  }

  // getBounds(place) {
  //   this.props.fetchBounds(place)
  // }

  clearSearch() {
    this.setState({query: ""})
  }

  handleLocationInput(event) {
    this.setState({query: event.currentTarget.value.split(',')[0]});
  }

  // setBounds(e) {
  //   this.props.fetchBounds
  //   this.setState({location: e.currentTarget.value})
  // }

  handleFormSubmit(e) {
    // e.preventDefault();
    this.props.getAllGyms(this.state.query)
      .then(() => {
        if (this.props.location.hash !== "/gyms") {
        //   this.props.history.push('/gyms')
          window.location.hash = "/gyms"
        }
      });
  }

  homeRender() {
    if (this.props.location.pathname === "/") {
      return "home-search"
    } else {
      return "else-search"
    }
  }

  // update(e) {
  //   this.setState({ query: e.currentTarget.value });
  // }

  render() {
    return (
      <form className={this.homeRender()}>
        <input
          type="text"
          id="txtPlaces"
          placeholder="Search by City"
          className={this.homeRender()} />
        <button>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </form>

    )
  }
}

export default withRouter(TestSearch);
