import React from 'react'

import Navbar from './Navbar'
import Icon from './Icon'
import Link from './Link'
import logo from '../logo-only.svg'

const App = (props) =>
  <div>
    <section className="hero is-primary is-medium">
      <div className="hero-head">
        <Navbar />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title logo-title">
            SCHEMED
          </h1>
          <h2 className="subtitle">
            Hatch a plan together
          </h2>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active"><Link to="/create/title">Title</Link></li>
              <li><Link to="/create/place">Place</Link></li>
              <li><Link to="/create/time">Time</Link></li>
              <li><Link to="/create/share">Share</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <div className="container">
      {props.children}
    </div>
  </div>

export default App
