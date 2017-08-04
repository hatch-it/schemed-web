// TextInput.js
//
import React, { Component } from 'react';
import "./TextInput.css";
import createHistory from 'history/createBrowserHistory'


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    document.getElementById("entry").value = "";
    this.props.history.push("/create/" + this.props.nextQuery);
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
