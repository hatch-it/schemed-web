import React, { Component } from 'react'
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete'
import { Link } from 'react-router-dom'
import Map from '../components/Map'
import Flex from "../components/Flex"


class PlacePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 3,
      address: "221B Baker Street, London, United Kingdom"
    }
  }

  setCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.newGeolocation)
    }
  }

  getClickCoords = event => {
    this.setState({lat: event.latLng.lat()})
    this.setState({lng: event.latLng.lng()})

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
        this.setState({ address : xhttp.response.results[0].formatted_address })
      }
    }
  }

  newGeolocation = position => {
    this.setState({lat : position.coords.latitude})
    this.setState({lng : position.coords.longitude})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  onAddressChange = address => {
    this.setState({ address })
  }

  render() {
    this.setCoords()

    const wrapperStyle = {
      position: 'relative', zIndex: '2'
    }

    const labelStyle = {
      marginTop: "2em",
      marginBottom: "1em",
      fontSize: "18px",
      fontWeight: "normal"
    }

    const autocompleteProps = {
      value: this.state.address,
      onChange: this.onAddressChange,
    }

    const autocompleteClassNames = {
      input: 'input',
      root: 'control is-expanded set-width' 
    }
    
    const buttonStyle = {
      padding: '0',
      border: '0',
      background: 'white'
    }
      
    const linkStyle = {
      color: "white",
    }

    const mapStyle = {
      margin: '5vh 0 3vh 0',
      height: '75vh',
      boxShadow: "2vw 2vh 1vh grey",
      zIndex: '1',
    }

    return (
      <div>
        < Flex align="center" style={wrapperStyle} col>
          <label style={labelStyle} className="label">Okay, but where?</label>
          <Flex>
            <div className="input-box">
              <PlacesAutocomplete inputProps={autocompleteProps}
                classNames={autocompleteClassNames} />
            </div>
            <button style={buttonStyle} onClick={this.handleFormSubmit}>
              <Link style={linkStyle} className="button is-primary" to='/create/time'>Next</Link>
            </button>
          </Flex>
        </Flex >
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
