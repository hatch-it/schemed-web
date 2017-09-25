import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

import Flex from "./Flex"
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class CalendarInput extends Component {
  constructor(props) {
   super(props);
   this.state = {
     dates: [new Date(2017, 8, 3), new Date(2017, 8, 21)],
     styles: {clicked: {color: 'black', backgroundcolor: 'teal'}}, 
     selectedDay: new Date(),
     availabilities: {
      3: [{id: '001', name: 'Tom', begin: "8:00pm", end: "10:00pm", event: "Example", date: new Date(2017, 8, 3)}, 
          {id: '010', name: 'Tom', begin: "10:00pm", end: "12:00pm", event: "Example", date: new Date(2017, 8 ,3)}],
      21: [{id: '011', name: 'Susan', begin: "6:00pm", end: "7:30pm", event: "Example", date: new Date(2017, 21, 8)}]
     },
    };
  }

  renderDay = day => {
  const daynum = day.getDate();
  return (
    <div>
      {daynum}
      <div className="AvailList">
        {this.state.availabilities[daynum] &&
          this.state.availabilities[daynum].map((availability, i) =>
            <div key={i}>
              {availability.begin} - {availability.end}
            </div>
          )}
      </div>
    </div>
  );
}

  handleDayClick = (day) => {
    this.state.dates.push(new Date(day.getTime()))
    this.setState({
        selectedDay: day,
        redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/create/timeselection" />;
    }
    return (
      <Flex align="center" col>
        <label style={{marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal"}} className="label">{this.props.title}</label>
        <Flex align="left" row>
          <Link className="button is-primary" to={this.props.lastPage || '/'}>Back</Link>
            <div>
            <DayPicker enableOutsideDays
              renderDay={this.renderDay}
              modifiers={{clicked: this.state.dates}}
              onDayClick={this.handleDayClick}
            />
            </div>
          <Link className="button is-primary" to={this.props.nextPage || '/'}>Next</Link>
        </Flex>
      </Flex>
    )
  }
}

export default CalendarInput;