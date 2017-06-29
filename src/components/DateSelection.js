import React, { Component } from 'react';
import "./TextInput.css";

class DateSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
    };
  }

  handleEntry = event => {
    if (this.props.onChange) this.props.onChange(event);
    else {
      let div = event.target.value.split("-"), d = div[2], m = div[1], y = div[0];
      this.setState({day: d, month: m, year: y});
    }
  }

  handleSubmit = event => {
    this.props.onSubmit(event);
  }

  render() {
    return(
      <div>
        <h1 className="title">Okay, but when?</h1>
        <input type="date" onChange={this.handleEntry} />
        <button type="button" onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

export default DateSelection;
