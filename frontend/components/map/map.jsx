import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.gyms)
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.gyms);
    console.log("else");
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default Map;
