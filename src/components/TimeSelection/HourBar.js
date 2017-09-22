/* HourBar.js
Component which visually divides the time between hours.
*/

import React, { Component } from 'react'

class HourBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lineStyle = {
      color: this.props.showBar ? "gray" : "rgba(0, 0, 0, 0)",
      background: this.props.showBar ? "gray" : "rgba(0, 0, 0, 0)", 
      height: "2px",
      maxWidth: this.props.lengthenBar ? "100%" : "80%",
      margin: "0 auto 0 auto",
      position: "relative",
      top: "-15px",
      zIndex: "0"
    }

    return (<hr style={lineStyle} />)
  }
}

export default HourBar