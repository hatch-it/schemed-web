import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import createBrowserHistory from '../node_modules/history/createBrowserHistory'
import TextInput from './components/TextInput';
import Sharing from './components/Sharing';
import DateSelection, { splitDate } from './components/DateSelection';
import logo from './logo.svg';
import './App.css';

import TitlePage from './pages/TitlePage'
import PlacePage from './pages/PlacePage'
import TimePage from './pages/TimePage'
import SharePage from './pages/SharePage'
import HomePage from './pages/HomePage'


class App extends Component {

  constructor(props) {
    super(props);
    this.customHistory = createBrowserHistory();
    this.state = {
      title: "",
      place: "",
      day: "",
      month: "",
      year: "",
    };
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  }

  handlePlaceChange = event => {
    this.setState({ place: event.target.value });
  }

  handleDateChange = event => {
    this.setState(splitDate(event.target.value));
  }

  renderDate() {
    const { day, month, year } = this.state;
    if (day && month && year) {
      return `${month}/${day}/${year}`;
    }
    return '';
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Schemed</h2>
          </div>
          <div>
            <p className="App-intro">
              <Route exact path='/'
                render={() => <HomePage />}
              />
              <Route
                path='/create/title'
                render={() => <TitlePage onChange={this.handleTitleChange} />}
              />
              <Route
                path='/create/place'
                render={() => <PlacePage onChange={this.handlePlaceChange} />}
              />
              <Route
                path='/create/time'
                render={() => <TimePage onChange={this.handleDateChange} />}
              />
              <Route
                path='/create/share'
                render={() => <SharePage onChange={this.handleDateChange}/>}
              />
            </p>
            <p>Title: {this.state.title}</p>
            <p>Place: {this.state.place}</p>
            <p>Date: {this.renderDate()}</p>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
