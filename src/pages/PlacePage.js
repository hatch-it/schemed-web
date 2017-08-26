import React, { Component } from 'react'
import TextInput from '../components/TextInput'

class PlacePage extends Component {
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
