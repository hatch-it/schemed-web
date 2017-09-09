import React, { Component } from 'react'
import Map from '../components/Map'
import TextInput from '../components/TextInput'

class PlacePage extends Component {
  constructor() {
    super()
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

  newGeolocation = position => {
    console.log(position.coords)
    this.state.lat = position.coords.latitude
    this.state.lng = position.coords.longitude
  }

  render() {
    this.setCoords() // TODO create delay for geolocations to be reassigned 
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
          {...this.props}
        />
        <Map {...this.state}
          containerElement={<div />}
          mapElement={ <div style={mapStyle} />
          }
        />
      </div>
    )
  }
}

export default PlacePage
