import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class TestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", bounds: ""};
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    autocomplete.addListener('place_changed', () => {
      // const place = autocomplete.getPlace().name;
      const place = autocomplete.getPlace();
      this.handleAutocomplete(place);
    });
    google.maps.event.addDomListener(document.getElementById('txtPlaces'), 'keydown', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  }

  handleAutocomplete(place) {
    let bounds = {southwest: { lat: place.geometry.viewport.f.b,
                                lng: place.geometry.viewport.b.b },
                  northeast: { lat: place.geometry.viewport.f.f,
                                lng: place.geometry.viewport.b.f }
    }
    this.setState({query: place.name, bounds: bounds});

    // console.log(place.geometry.viewport.b.b, place.geometry.viewport.f.b);
    // this.props.fetchBounds(place.name).then(() => {
    //   this.props.getAllGyms(this.props.query, this.props.bounds)
    // })
    // this.props.getAllGyms(this.state.query, this.state.bounds)

    this.handleFormSubmit();
    // this.clearSearch();
    // debugger
  }


  clearSearch() {
    this.setState({query: ""})
  }

  handleLocationInput(event) {
    this.setState({query: event.currentTarget.value.split(',')[0]});
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
