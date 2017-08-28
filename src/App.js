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

import AppContainer from './components/AppContainer'
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

  handleTitleChange = value => {
    this.setState({ title: value });
  }

  handlePlaceChange = value => {
    this.setState({ place: value });
  }

  handleDateChange = value => {
    console.log(value)
    this.setState(splitDate(value));
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
            <Route exact path='/'
              render={() => <HomePage />}
            />
            <Route
              path='/create/title'
              render={() => <TitlePage onChange={this.handleTitleChange} value={this.state.title}/>}
            />
            <Route
              path='/create/place'
              render={() => <PlacePage onChange={this.handlePlaceChange} value={this.state.place} />}
            />
            <Route
              path='/create/time'
              render={() => <TimePage onChange={this.handleDateChange} value={this.renderDate()} />}
            />
            <Route
              path='/create/share'
              render={() => <SharePage/>}
            />
          </div>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
