/* TimeSignpost.js
Component which visualizes an hour.
*/

import React, { Component } from 'react'
import HourNumber from './HourNumber'
import HourBar from './HourBar'

const noon = 12 * 4

class TimeSignpost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      period: this.props.period,
      showNum: this.props.show.showNum,
      showBar: this.props.show.showBar
    }
  }

  calcMins = () => {
    return this.state.period * 15
  }

  calcPeriod = () => {
    return (this.state.period >= noon) ? " PM" : " AM"
  }

  clicked = (event) => {
    if (this.props.onClick) {
      this.props.onClick(this.props.period)
    }
  }

  render() {
    const containerStyle = {
      height: "3vh"
    }

    const numberStyle = {
      display: "inline"
    }

    return (
      <div style={containerStyle} onClick={this.clicked}>
        <HourNumber showNum={this.state.showNum} mins={this.calcMins()} meridian={this.calcPeriod()} />
        <HourBar showBar={this.state.showBar} lenghtenBar={this.state.showNum}/>
      </div>
    )
  }
}

export default TimeSignpost