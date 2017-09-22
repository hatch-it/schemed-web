/* HourNumber.js
Component which visualizes an hour of the day.
*/

import React, { Component } from 'react'

const noonInMins = 12 * 15 * 4

class HourNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mins: this.props.mins,
      meridian: this.props.meridian,
      showNum: this.props.showNum
    }
  }

  minsTo12HourTime = () => {
    const time = this.state.mins >= noonInMins ? this.state.mins - noonInMins : this.state.mins
    const hours = Math.floor(time / 60) || 12
    const mins = time % 60 
    return hours.toString() + ":" + (mins == 0 ? "00" : mins.toString())
  }

  render() {
    const containerStyle = {
      display: "inline",
      position: "relative",
      zIndex: "1",
      background: "white",
      color: this.props.showNum ? "#4a4a4a" : "rgba(0, 0, 0, 0)"
    }

    const periodStyle = {
      fontSize: "18px",
      display: "inline",
      verticalAlign: "middle",
    }

    const meridianStyle = {
      fontSize: "14px",
      display: "inline",
      verticalAlign: "middle",
    }

    return (
      <div style={containerStyle}>
        <h1 style={periodStyle}>{this.minsTo12HourTime()}</h1>
        <h3 style={meridianStyle}>{this.state.meridian}</h3>
      </div>
    )
  }
}

export default HourNumber