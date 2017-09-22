import React, { Component } from 'react'
import TimeSelection from './TimeSelection'
import TimeSignpost from './TimeSignpost'
import HourBar from './HourBar'

class TimeSignpostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inc: 0,
      availabilities: {}
    }
  }

  incr = () => {
    return this.state.inc++
  }

  resetInc = () => {
    this.state.inc = 0
  }

  getPeriod = (period) => {
    console.log(period)
  }

  render() {
    let o = { year: 0, month: 0, day: 0 }
    const containerStyle = {
      height: "100vh",
      // overflow: "scroll" Uncomment later when capabilities fully implemented
    }

    const hourStyle = {
      showNum: true,
      showBar: true
    }

    const halfStyle = {
      showNum: false,
      showBar: true
    }

    const quarterStyle = {
      showNum: false,
      showbar: false
    }

    return (
      <div id="dayContainer" style={containerStyle}>
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={hourStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={quarterStyle} period={this.incr()} onClick={this.getPeriod} />
        <TimeSignpost show={halfStyle} period={this.incr()} onClick={this.getPeriod} />
      </div>
    )
  }
}

export default TimeSignpostContainer