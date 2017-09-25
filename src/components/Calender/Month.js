import React, { Component } from 'react'

// availibilites: { id: {}, name: {},  start: {}, end: {}, event: {} }



class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.state.month,
      year: this.state.year,
      availibilities: {}
    }
  }
  renderWeeks = () => {
    // do stuff
  }

  render() {
    return (
      <Flex col align='center'>
        {this.renderWeeks()}
      </Flex>
    )
  }
}

export default Month 
// ...
