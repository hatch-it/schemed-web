import React, { Component } from 'react';
import "./TextInput.css";
import { Link } from 'react-router-dom'

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
      this.props.onChange(event);
    } else {
      this.setState(splitDate(event.target.value));
    }
  }

  handleSubmit = (event) => {
    this.props.onChange(event);
  }

  render() {
    return (
      <div>
        <h1 className="title">Okay, but when?</h1>
        <input type="date" onChange={this.handleChange} />
        <Link to={this.props.nextPage || '/'}>Next</Link>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default DateSelection;
