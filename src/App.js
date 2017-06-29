import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput'
import Sharing from "./components/Sharing"
import DateSelection from "./components/DateSelection"

var obj = {0: "title", 1: "place", 2: "date", 3: "share"};
var k = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            title: "", 
            place: "",
            day: "",
            month: "",
            year: "",
            page: obj[k],
        };
    }

    handleTitleChange = event => {
        this.setState({title: event.target.value});
    }

    handlePlaceChange = event => {
        this.setState({place: event.target.value});
    }

    handleDateChange = event => {
        let div = event.target.value.split("-"), d = div[2], m = div[1], y = div[0];
        this.setState({day: d, month: m, year: y});
    }

    handlePageChange = event => {
        this.setState({page: obj[++k]});
    }

    renderPage = () => {
        switch(this.state.page) {
            case obj[0]: 
                return (
                        <TextInput title='Title your event' 
                        onChange={this.handleTitleChange} 
                        onSubmit={this.handlePageChange} />);
            case obj[1]:
                return (
                        <TextInput title="Where will you meet?"
                        onChange={this.handlePlaceChange} 
                        onSubmit={this.handlePageChange} />);
            case obj[2]:
                return (
                        <DateSelection onChange={this.handleDateChange} 
                        onSubmit={this.handlePageChange}/>);
            case obj[3]:
                return (<Sharing />);
            default:
                return (<br />);
        }
    }

    renderDate() { 
        return ((this.state.day != "" && this.state.month != "" && this.state.year != "") ? 
            this.state.month + "/" + this.state.day + "/" + this.state.year : "")
    } 
    
    render() {
        return (
                <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                </div>
                <div>
                <p className="App-intro">{this.renderPage()}</p>
                <p>Title: {this.state.title}</p>
                <p>Place: {this.state.place}</p>
                <p>Date: {this.renderDate()}</p>
                </div>
                </div>);
    }
}

export default App;
