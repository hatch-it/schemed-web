import React, { Component } from 'react'
import Sharing from '../components/Sharing'

class SharePage extends Component {
  render() {
    return (
      <Sharing
        title="Share to everyone yay!1!!"
        onChange={this.props.onChange}
      />
    )
  }
}

export default SharePage
