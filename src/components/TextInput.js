// TextInput.js
//
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Flex from "./Flex"


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
      <Flex align="center" col>
        <h1 style={{margin: "2em"}} className="title">{this.props.title}</h1>
        <Flex>
          <input type="text" onChange={this.handleChange} />
          <Link className="button is-primary is-medium" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
        <p>{this.state.text}</p>
      </Flex>
    );
  }
}

export default TextInput;
