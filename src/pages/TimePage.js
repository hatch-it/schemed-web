import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import CalendarInput from '../components/CalendarInput'

class TimePage extends Component {
  render() {
    return (
      <CalendarInput
        title='Okay, but when?'
        lastPage='/create/place'
        nextPage='/create/share'
        type='date'
        size='55'
        {...this.props}
      />
    )
  }
}

export default TimePage
