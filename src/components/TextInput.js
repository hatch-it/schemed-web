// TextInput.js
//
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Flex from "./Flex"


class TextInput extends Component {
  handleChange = event => {
      this.props.onChange(event.currentTarget.value);
  }

  render() {
    return (
      <Flex align="center" col>
        <label style={{marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal"}} className="label">{this.props.title}</label>
        <Flex>
          <div className="control" style={{marginRight: "1%" }}> 
            <input className="input" type="text" size="30" onChange={this.handleChange} value={this.props.value}/>
          </div>
          <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
      </Flex>
    );
  }
}

export default TextInput;
