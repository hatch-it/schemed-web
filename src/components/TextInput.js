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
        <label style={{marginTop: "2em", marginBottom: "1em"}} className="label">{this.props.title}</label>
        <Flex>
          <div className="control" style={{marginRight: "1%" }}> 
            <input className="input" type="text" size="40" onChange={this.handleChange}  />
          </div>
          <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
        <p>{this.state.text}</p>
      </Flex>
    );
  }
}

export default TextInput;
