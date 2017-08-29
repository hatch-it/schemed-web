import React, { Component } from 'react';
import Flex from "./Flex"

class Sharing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "If you're reading this, we still need to implement URL selection.",
    };
  }

  render() {
    return (
      <Flex align="center" col>
        <label style={{marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal"}} className="label">{this.props.title}</label>
        <div>
          <a href="https://sambalana.slack.com" target="_blank">
            <p>{this.state.url}</p>
          </a>
        </div>
      </Flex>
    )
  }
}

export default Sharing;
