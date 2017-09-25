import React, { Component } from 'react'

class Day extends Component {
    render() {
        return(
            <div>
                <DayNumber
                dayNumber={this.state.dayNumber}
                />
                <DayInfo 
                info={this.state.availabilites.printInfo()}
                />
            </div>
        )
    }
}

export default Day