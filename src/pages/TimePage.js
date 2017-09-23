import React, { Component } from 'react'
<<<<<<< HEAD
import TextInput from '../components/TextInput'
import CalendarInput from '../components/CalendarInput'
=======
import TimeSignpostContainer from '../components/TimeSelection/TimeSignpostContainer'

>>>>>>> 39e46f16f20f280720471cf5b96a36e657730265

class TimePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
<<<<<<< HEAD
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
=======
    return (<TimeSignpostContainer />)
>>>>>>> 39e46f16f20f280720471cf5b96a36e657730265
  }
} 

export default TimePage
