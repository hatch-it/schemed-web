import React, { Component } from 'react'

/*

type Props = {
  month: Month,
  onMonthChange: (month: number) => void,
  onYearChange: (year: number) => void,
}
*/

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function toMonthName(month) {
  return monthNames[month]
}

class MonthSelector extends Component {
  handlePrev = () => {
    const { month, year } = this.props.month
    if (month === 0) {
      this.props.onYearChange(year - 1)
      this.props.onMonthChange(11)
    } else {
      this.props.onMonthChange(month - 1)
    }
  }

  handleNext = () => {
    const { month, year } = this.props.month
    if (month === 11) {
      this.props.onYearChange(year + 1)
      this.props.onMonthChange(0)
    } else {
      this.props.onMonthChange(month + 1)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePrev}>
          Prev
        </button>
        {toMonthName(this.props.month.month)} {this.props.month.year}
        <button onClick={this.handleNext}>
          Next
        </button>
      </div>
    )
  }
}

export default MonthSelector
