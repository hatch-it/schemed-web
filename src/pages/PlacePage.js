// PlacePage.js

import React, { Component } from 'react'
import Map from '../components/Map'
import TextInput from '../components/TextInput'


class PlacePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 3
    }
  }

  setCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.newGeolocation)
    }
  }

  getClickCoords = event => {
    const lat = event.latLng.lat()
    const lng = event.latLng.lng()

    this.state.lat = lat 
    this.state.lng = lng 

    this.makeRequest(lat, lng)
  }

  makeRequest = (lat, lng) => {
    let xhttp = new XMLHttpRequest()
    const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?'
    const latlng  = 'latlng=' + lat + ',' + lng
    const APIkey  = '&key=AIzaSyBuIYgWelclGIon27DfSCTrzcWLDubolCQ'

    xhttp.open('GET', baseURL + latlng + APIkey)
    xhttp.responseType = 'json'
    xhttp.send() 

    xhttp.onload = () => {
      if (xhttp.response.results.length) {
        this.props.onChange(xhttp.response.results[0].formatted_address)
      }
    }
  }

  newGeolocation = position => {
    this.state.lat = position.coords.latitude
    this.state.lng = position.coords.longitude
  }

  render() {
    this.setCoords()
    const mapStyle = {
      margin: '5vh 0 3vh 0',
      height: '75vh',
      boxShadow: "2vw 2vh 1vh grey"
    }
    return (
      <div>
        <TextInput
          title='Where will you meet?'
          nextPage='/create/time'
          size='55'
          {...this.props}
        />
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          onClick={this.getClickCoords}
          containerElement={<div />}
          mapElement={<div style={mapStyle} />
          }
        />
      </div>
    )
  }
}

export default PlacePage
