import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


class GymMap extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.gym.name !== "") {
      const mapOptions = {
        center: { lat: nextProps.gym.lat, lng: nextProps.gym.lng},
        zoom: 13
      };

      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      var marker = new google.maps.Marker({
        position: { lat: nextProps.gym.lat, lng: nextProps.gym.lng},
        map: this.map,
      });
    }
  }

  render() {
    return (
      <div id="map-photo" ref={ map => this.mapNode = map }>
      </div>
    )
  }
}

export default GymMap;
