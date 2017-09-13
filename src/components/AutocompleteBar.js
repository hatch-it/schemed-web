import React, { Component } from 'react'
import PlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-places-autocomplete'
import { Link } from 'react-router-dom'
import Flex from "../components/Flex"


class AutocompleteBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "221B Baker Street, London, United Kingdom"
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
    console.log(event)
  }

  onAddressChange = address => {
    this.setState({ address })
  }

  render() {
    const autocompleteProps = {
      value: this.state.address,
      onChange: this.onAddressChange,
    }

    const autocompleteClassNames = {
      input: 'input input-box place-size',
    }

    const linkStyle = {
      color: "white",
    }

    return (
      <Flex align="center" col>
        <label style={{ marginTop: "2em", marginBottom: "1em", fontSize: "18px", fontWeight: "normal" }} className="label">Okay, but where?</label>
        <Flex >
          <div className="control input-box">
            <PlacesAutocomplete inputProps={autocompleteProps}
              classNames={autocompleteClassNames} />
          </div>
          <button className="button is-primary" onClick={this.handleFormSubmit}>
            <Link style={linkStyle} to='/create/time'>Next</Link>
          </button>
        </Flex>
      </Flex>
    )
  }
}

export default AutocompleteBar