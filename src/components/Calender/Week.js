import React, { Component } from 'react'

class Week extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            weekNumber: this.state.weekNumber
        }
    }
    renderDays = (weekNumber) => {

    } 
    render() {
        return(
            <Flex col align='center'>
                {this.renderDays()}
            </Flex>
        )
    }
}