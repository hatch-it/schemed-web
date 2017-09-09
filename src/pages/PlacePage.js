import React, { Component } from 'react'
import Map from '../components/Map'
import TextInput from '../components/TextInput'

class PlacePage extends Component {
  constructor() {
    super()
    this.state = {
      lat: 0,
      lng: 0
    }
  }

  setCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.newGeolocation)
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  newGeolocation = position =>  {
    console.log(position.coords)
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
          {...this.props}
        />
        <Map {...this.state} containerElement={<div />}
          mapElement={
            <div style={mapStyle} />
          }
        />
      </div>
    )
  }
}

export default PlacePage
