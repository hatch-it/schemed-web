import React, { Component } from 'react'

/*
type Availability = {
  id: string,
  name?: string,
  begin: Date,
  end: Date,
}

type Month = {
  year: number,
  month: number,
  availabilities: Availability[],
}

type Props = {
  month: Month,
}
*/

class Calender extends Component {
  render() {
    return (
      <div>
        <MonthSelector
          month={this.props.month}
          onMonthChange={}
        />
        <Month
          month={this.props.month}
        />
      </div>
    )
  }
}

export default Calender
