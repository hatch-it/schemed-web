import React, { Component } from 'react'
import TextInput from '../components/TextInput'

class TitlePage extends Component {
  render() {
    return (
      <TextInput
        title='Title your event'
        nextPage='/create/place'
        size="55"
        {...this.props}
      />
    )
  }
}

export default TitlePage
