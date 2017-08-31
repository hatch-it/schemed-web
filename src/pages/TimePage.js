import React, { Component } from 'react'
import TextInput from '../components/TextInput'

class TimePage extends Component {
  render() {
    return (
      <TextInput
        title='Okay, but when?'
        nextPage='/create/share'
        type='date'
        {...this.props}
      />
    )
  }
}

export default TimePage
