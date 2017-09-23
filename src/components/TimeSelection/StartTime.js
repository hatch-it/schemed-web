/* EndTime.js
Component which represents the upper bounds of one block of time in which 
a user is available.
*/

import React, { Component } from 'react'

class StartTime extends Component {
  constructor(props) {
    super(props)
    this.noon = 12 * 60
    this.state = {
      time: 60 * 12, // A 24 hour representation in minutes, in which 0 <= value < 720
    }
  }

  calcPeriod = () => {
    if (this.state.time >= this.noon) {
      return " PM"
    }
    return " AM"
  }

  /* Returns the 12 hour representation of the time 
  */
  to12Hour = () => {
    if (!this.state.time || this.state.time == this.noon) {
      return "12:00"
    }

    let hours = Math.floor(this.state.time / 60)
    const mins = this.minsToVisual(this.state.time % minToHour)
    const minToHour = 60;

    if (this.state.time > (this.noon)) {
      hours = Math.floor((this.state.time - (minToHour * 12)) / 60)
    }

    return (hours).toString() + ":" + mins
  }

  minsToVisual = mins => {
    let last = (mins % 10).toString()
    let first = (Math.floor(mins / 10)).toString()
    return first + last
  }

  isBeforeEnd = endTime => {
    return startTime > this.state.time
  }

  render() {
    const h1Style = {
      fontSize: "18px",
      display: "inline",
      verticalAlign: "middle"
    }
    const h3Style = {
      fontSize: "14px",
      display: "inline",
      verticalAlign: "middle"
    }

    return (
      <div>
        <h1 style={h1Style}>{this.to12Hour()}</h1>
        <h3 style={h3Style}>{this.calcPeriod()}</h3>
      </div>
    )
  }
}

export default StartTime 