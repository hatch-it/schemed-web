import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

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
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/docs">Docs</Link>
        <span className="nav-item">
          <a className="button is-inverted">
            <Icon name="github" />
            <span>Star</span>
          </a>
        </span>
      </div>
    </div>
  </header>

export default Navbar
