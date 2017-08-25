// TextInput.js
//
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./TextInput.css"


class TextInput extends Component {
  state = { text: '' }

  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <input type="text" onChange={this.handleChange} />
        <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default TextInput;
