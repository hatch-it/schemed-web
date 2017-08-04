import React, { Component } from 'react'
import Sharing, { splitDate } from '../components/DateSelection'

class SharePage extends Component {
  render() {
    return (
      <Sharing
        title='Sharing'
        nextPage='/create/title'
        onChange={this.props.onChange}
      />
    )
  }
}

export default SharePage
