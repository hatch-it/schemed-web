import React, { Component } from 'react'
import TextInput from '../components/TextInput'

class PlacePage extends Component {
  constructor() {
    super()
    this.params = {
      "key" : "AIzaSyBuIYgWelclGIon27DfSCTrzcWLDubolCQ",
      "location" : "",
      "radius" : ""
    }

    this.geolocationAllowed = false
    this.getGeolocation()
  }

  getGeolocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getPlace);
          this.geolocationAllowed = true 
      } else {
          console.log("Geolocation is not supported by this browser.");
      }
  }

  render() {
    return (
      <TextInput
        title='Where will you meet?'
        nextPage='/create/time'
        {...this.props}
      />
    )
  }
}

export default PlacePage
