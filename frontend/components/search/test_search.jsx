import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import GymSearchItem from '../gyms/gyms_search_item';
import SessionFormContainer from '../session/session_form_container';

class TestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", bounds: undefined};
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.update = this.update.bind(this);
    this.quickSearch = this.quickSearch.bind(this);
    this.sanFran = this.sanFran.bind(this);
    this.newYork = this.newYork.bind(this);
    this.davis = this.davis.bind(this);
    this.sanDiego = this.sanDiego.bind(this);
  }

  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    autocomplete.addListener('place_changed', () => {
      // const place = autocomplete.getPlace().name;
      const place = autocomplete.getPlace();
      // const bounds = new google.maps.LatLngBounds();
      // bounds.extend(place.geometry.location)
      // console.log(bounds);
      this.props.fetchBounds(place.name)
      this.handleAutocomplete(place);
    });
    google.maps.event.addDomListener(document.getElementById('txtPlaces'), 'keydown', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }

  handleAutocomplete(place) {
    // this.props.fetchBounds()
    if (place.geometry) {
      let bounds = {southwest: { lat: place.geometry.viewport.f.b - 0.09,
        lng: place.geometry.viewport.b.b - 0.09},
        northeast: { lat: place.geometry.viewport.f.f + 0.09,
          lng: place.geometry.viewport.b.f + 0.09 }
        }
        this.setState({query: place.name, bounds: bounds});
    } else {
      this.setState({query: this.state.query})
    }

    this.handleFormSubmit();

  }

  clearSearch() {
    this.setState({query: "", bounds: undefined});
  }

  handleLocationInput(event) {
    this.setState({query: event.currentTarget.value.split(',')[0]});
  }

  update(e) {
    this.setState({ query: e.currentTarget.value });
  }

  handleFormSubmit(e) {
    // e.preventDefault();
    this.props.getAllGyms(this.state.query, this.state.bounds)
      .then(() => {
        if (this.props.location.hash !== "/gyms") {
        //   this.props.history.push('/gyms')
          window.location.hash = "/gyms"
        }
      });
    this.clearSearch();
  }

  sanFran() {
    this.setState({query: "San Francisco"});
    this.props.fetchBounds("San Francisco").then(() => this.handleFormSubmit());
  }

  newYork() {
    this.setState({query: "New York"});
    this.props.fetchBounds("New York").then(() => this.handleFormSubmit());
  }

  davis() {
    this.setState({query: "Davis"});
    this.props.fetchBounds("Davis").then(() => this.handleFormSubmit());
  }

  sanDiego() {
    this.setState({query: "San Diego"});
    this.props.fetchBounds("San Diego").then(() => this.handleFormSubmit());
  }

  quickSearch() {
    if (this.homeRender() === "home-search") {
      return(
        <div className="quick-search-home">
          <button onClick={this.sanFran}>San Francisco</button>
          <button onClick={this.newYork}>New York City</button>
          <button onClick={this.sanDiego}>San Diego</button>
          <button onClick={this.davis}>Davis</button>
        </div>
      );
    } else {
      null
    }
  }

  homeRender() {
    if (this.props.location.pathname === "/") {
      return "home-search"
    } else {
      return "else-search"
    }
  }

  render() {
    return (
      <div className={this.homeRender()}>
        <form className={this.homeRender()}>
          Search
          <input
            type="text"
            id="txtPlaces"
            placeholder="by City"
            onChange={this.update}
            className={this.homeRender()} />
          <button>
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          </button>
        </form>
        {this.quickSearch()}
      </div>
    )
  }
}

export default withRouter(TestSearch);
