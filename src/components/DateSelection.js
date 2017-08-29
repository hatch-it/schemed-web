import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Flex from "./Flex"

export function splitDate(value) {
  const tokens = value.split("-");
  const day = tokens[2];
  const month = tokens[1];
  const year = tokens[0];
  return { day, month, year };
}

class DateSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
    };
  }

  handleEntry = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    } else {
      this.setState(splitDate(event.target.value));
    }
  }

  handleSubmit = (event) => {
    this.props.onChange(event.currentTarget.value);
  }

  render() {
    return (
      <Flex align="center" col>
        <label style={{marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal"}} className="label">{this.props.title}</label>
        <Flex>
          <div className="control" style={{marginRight: "1%" }}> 
            <input className="input" type="date" size="30" onChange={this.handleEntry} value={this.state.text}/>
          </div>
          <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
      </Flex>
    );
  }
}

export default DateSelection;
