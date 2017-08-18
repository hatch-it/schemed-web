import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import createBrowserHistory from '../node_modules/history/createBrowserHistory'
import TextInput from './components/TextInput';
import Sharing from './components/Sharing';
import DateSelection, { splitDate } from './components/DateSelection';
import logo from './logo.svg';
import './App.css';

import AppContainer from './components/AppContainer'
import TitlePage from './pages/TitlePage'
import PlacePage from './pages/PlacePage'



/* TODO:
 * 1. Keep refreshing occuring at appropriate times
 * 2. Save data when the pages change locations
 * 3. Add a Router element containing input results
 */
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
        <AppContainer>
          <div>
            <p className="App-intro">
              <Route
                exact
                path='/'
                render={props =>
                  <Redirect to='/create/title' />
                }
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
                render={props =>
                  <DateSelection
                    onChange={this.handleDateChange}
                  />
                }
              />
            </p>
            <p>Title: {this.state.title}</p>
            <p>Place: {this.state.place}</p>
            <p>Date: {this.renderDate()}</p>
          </div>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
