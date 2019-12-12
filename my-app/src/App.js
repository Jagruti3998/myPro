import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header.js'
import Login from './component/login.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
       <Login/>
      </div>
    );
  }
}

export default App;

