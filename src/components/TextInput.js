// TextInput.js
//
import React, { Component } from 'react';
import "./TextInput.css";


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "",
    };
  }

  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    } else {
      this.setState({text: event.target.value});
    }
  }

  handleSubmit = event => {
    this.props.onSubmit(event);
    document.getElementById("entry").value = "";
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <input type="text" id="entry" onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>Next</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default TextInput;
