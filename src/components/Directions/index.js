import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
const googleMapsKey = require('../../../googleMapsApi.json').key;

const Directions = ({ destination, origin, onReady }) => <MapViewDirections
  destination={destination}
  origin={origin}
  onReady={onReady}
  apikey={googleMapsKey}
  strokeWidth={3}
  strokeColor="#222"
/>;

export default Directions;
