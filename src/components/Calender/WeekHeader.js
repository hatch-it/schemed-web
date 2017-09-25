import React, { Component } from 'react'

const headerTitles = ('S,', 'M', 'Tu', 'W', 'Th', 'F', 'Sa')

class Week extends Component{
    renderHeader = () => {
    }
    render() {
        return(
            <Flex col align='center'>
                {this.renderHeader()}
            </Flex>
        )
    }
}