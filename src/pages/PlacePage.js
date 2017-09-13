import React, { Component } from 'react'
import Map from '../components/Map'
import AutocompleteBar from '../components/AutocompleteBar'


class PlacePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 3,
    }
  }

  setCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.newGeolocation)
    }
  }

  getClickCoords = event => {
    this.setState({ lat: event.latLng.lat() }) 
    this.setState({ lng: event.latLng.lng() }) 

    this.makeRequest(this.state.lat, this.state.lng)
  }

  buildURL = (lat, lng) => {
    const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?'
    const latlng = 'latlng=' + lat + ',' + lng
    const APIkey = '&key=AIzaSyBuIYgWelclGIon27DfSCTrzcWLDubolCQ'
    return baseURL + latlng + APIkey
  }

  makeRequest = (lat, lng) => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', this.buildURL(lat, lng))
    xhttp.responseType = 'json'
    xhttp.send()

    xhttp.onload = () => {
      if (xhttp.response.results.length) {
        console.log(xhttp.response)
        this.props.onChange(xhttp.response.results[0].formatted_address)
      }
    }
  }

  newGeolocation = position => {
    this.setState({lat: position.coords.latitude })
    this.setState({lng: position.coords.longitude})
  }

  render() {
    this.setCoords()
    const mapStyle = {
      margin: '5vh 0 3vh 0',
      height: '75vh',
      boxShadow: "2vw 2vh 1vh grey",
      zIndex: '-1',
    }

    return (
      <div>
        <AutocompleteBar />
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
