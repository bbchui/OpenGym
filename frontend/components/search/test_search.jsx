import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class TestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'), {types: ['(cities)'], componentRestrictions: {country: "us"}});
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace().name;
      this.handleAutocomplete(place);
    });
    // google.maps.event.addDomListener(document.getElementById('txtPlaces'), 'keydown', function(e) {
    //   if (e.keyCode === 13) {
    //     e.preventDefault();
    //   }
    // });
    this.props.getAllGyms(this.state.query)
  }

  handleAutocomplete(place) {
    this.setState({query: place});
  }
  handleLocationInput(event) {
    this.setState({query: event.currentTarget.value.split(',')[0]});
  }

  handleFormSubmit(event) {
    // event.preventDefault();
    this.props.getAllGyms(this.state.query)
    .then(this.props.history.push(`/gyms`));
    // this.clearFields();
    this.setState({city: ''});
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="else-search">
        <input onBlur={this.handleLocationInput} type="text" id="txtPlaces" placeholder="Here" />
        <button>
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </button>
      </form>

    )
  }
}

export default withRouter(TestSearch);
