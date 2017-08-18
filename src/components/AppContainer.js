import React from 'react'

import Navbar from './Navbar'
import Icon from './Icon'

const App = (props) =>
  <div>
    <section className="hero is-primary is-medium">

      <div className="hero-head">
        <Navbar />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Schemed
          </h1>
          <h2 className="subtitle">
            Hatch a plan with your friends
          </h2>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <span>
                  <Icon name="book" />
                  <span>Name it</span>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </section>
    {props.children}
  </div>

export default App
