export default class Markermanager{
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(gyms) {
    const gymsObj = {};
    gyms.forEach(gym => gymsObj[gym.id] = gym);

    gyms
      .filter(gym => !this.markers[gym.id])
      .forEach(newGym => this.createMarkerFromGym(newGym, this.handleClick))

    Object.keys(this.markers)
      .filter(gymId => !gymsObj[gymId])
      .forEach((gymId) => this.removeMarker(this.markers[gymId]))

  }

  createMarkerFromGym(gym) {
    const position = new google.maps.LatLng(gym.lat, gym.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      gymId: gym.id
    });

    marker.setMap(this.map);
    this.markers[gym.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.gymId].setMap(null);
    delete this.markers[marker.gymId];
  }
}
