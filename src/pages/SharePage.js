import React, { Component } from 'react'
import Sharing from '../components/Sharing'

class SharePage extends Component {
  render() {
    return (
      <Sharing
        title="Spread the Word!"
        {...this.props}
      />
    )
  }
}

export default SharePage
