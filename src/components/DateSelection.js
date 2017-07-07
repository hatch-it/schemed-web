import React, { Component } from 'react';
import "./TextInput.css";

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
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div>
        <h1 className="title">Okay, but when?</h1>
        <input type="date" onChange={this.handleEntry} />
        <button type="button" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

export default DateSelection;
