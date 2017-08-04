import React, { Component } from 'react'
import DateSelection, { splitDate } from '../components/DateSelection'

class TimePage extends Component {
  render() {
    return (
      <DateSelection
        title='Okay, but when?'
        nextPage='/create/share'
        onChange={this.props.onChange}
      />
    )
  }
}

export default TimePage
