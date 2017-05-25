import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


class GymIndexMap extends React.Component {

  componentDidMount() {
    let center;
    if (this.props.gyms[0]) {
      center = { lat: this.props.gyms[0].lat,
                  lng: this.props.gyms[0].lng}
    } else {
      center = { lat: 37.7758, lng: -122.435 }
    }


    const mapOptions = {
      center: center,
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.gyms)
  }

  componentWillReceiveProps(nextProps) {
    let center;
    let zoom;
    console.log(nextProps);
    if (Object.keys(nextProps.gyms).length === 1) {
      center = { lat: nextProps.gyms[0].lat,
                  lng: nextProps.gyms[0].lng};
      zoom = 14;
    } else if (nextProps.gyms[0]) {
      center = { lat: nextProps.gyms[0].lat,
                  lng: nextProps.gyms[0].lng}
      zoom = 11;
    } else {
      center = { lat: 37.7758, lng: -122.435 }
      zoom = 10;
    }

    const mapOptions = {
      center: center,
      zoom: zoom
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(nextProps.gyms);

    const markers = this.MarkerManager.markers;
    // console.log(markers);
  }

  gymInfo(marker) {
    let gymId = marker.gymId;
    let gym = this.props.gyms[gymId];


  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default GymIndexMap;
