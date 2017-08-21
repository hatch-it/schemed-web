import React from 'react'

import Icon from './Icon'
import Link from './Link'
import logo from '../logo-compact.svg'

const Navbar = (props) =>
  <header className="nav">
    <div className="container">
      <div className="nav-left">
        <Link className="nav-item" to="/">
          <img src={logo} alt="Logo" />
        </Link>
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
    </div>
  </header>

export default Navbar
