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
    console.log(props)
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

  setLocation = (event) => {
    // set the location and send it up
    var location = "TEST"
    // TODO From here get click coordiantes -> map coordinates -> address -> place name 
    this.props.onChange(location)
    console.log("Location is now " + location)
  }


  render() {
    // TODO create delay for geolocations to be reassigned
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
        <Map 
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          onClick={this.setLocation}
          containerElement={<div />}
          mapElement={ <div style={mapStyle} />
          }
        />
      </div>
    )
  }
}

export default PlacePage
