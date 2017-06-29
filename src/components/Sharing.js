import React, { Component } from 'react';
import "./TextInput.css";

class Sharing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "If you're reading this, we still need to implement URL selection.",
    };
  }

  render() {
    return (
      <div>
        <h2>Spread the Word!</h2>
        <a href="https://sambalana.slack.com" target="_blank">
          <p>{this.state.url}</p>
        </a>
      </div>
    );
  }
}

export default Sharing;
