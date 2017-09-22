/* TimeSelection.js
The component in which a user selects the time of day of which he or she is available.
*/

import React, { Component } from 'react'
import EndTime from './EndTime'

class TimeSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: this.props.year, 
      month: this.props.month, 
      day: this.props.day, 
      availabilities: []
    }
  }

  render() {
    return(<div>
      <EndTime />
    </div>)
  }
}

export default TimeSelection