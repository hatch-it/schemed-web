// TextInput.js
//
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Flex from "./Flex"

export function splitDate(value) {
  const tokens = value.split("-");
  const day = tokens[2];
  const month = tokens[1];
  const year = tokens[0];
  return { day, month, year };
}

class TextInput extends Component {
  constructor(props) {
   super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
    };
  }

  handleChange = (event) => {
      this.props.onChange(event.currentTarget.value);
  }

  handleEntry = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    } else {
      this.setState(splitDate(event.target.value));
    }
  }

  render() {
    return (
      <Flex align="center" col>
        <label style={{marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal"}} className="label">{this.props.title}</label>
        <Flex align="left" row>
          <Link className="button is-primary" to={this.props.lastPage || '/'} style={{marginRight:5}} >Back</Link>
          <div className="control input-box"> 
            <input className="input" type={this.props.type || 'text'} size={this.props.size} onChange={this.handleChange} value={this.props.value}/>
          </div>
          <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
      </Flex>
    );
  }
}

export default TextInput;
