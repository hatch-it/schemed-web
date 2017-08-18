import React from 'react'

import Icon from './Icon'

const Navbar = (props) =>
  <header className="nav">
    <div className="nav-left">
      <a className="nav-item">
        <img src="images/logo.png" alt="Logo" />
      </a>
    </div>
    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div className="nav-right nav-menu">
      <a className="nav-item is-active">
        Home
      </a>
      <a className="nav-item">
        About
      </a>
      <a className="nav-item">
        Documentation
      </a>
      <span className="nav-item">
        <a className="button is-primary is-inverted">
          <Icon name="github" />
          <span>Star</span>
        </a>
      </span>
    </div>
  </header>

export default Navbar
