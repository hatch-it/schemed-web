import { withGoogleMap, GoogleMap } from "react-google-maps";
import React, { Component } from 'react';

const Map = withGoogleMap(props => ( 
  <GoogleMap
    ref={props.onMapLoad} defaultZoom={ props.zoom } 
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    onClick={props.onMapClick}>
  </GoogleMap>
));

export default Map; 

