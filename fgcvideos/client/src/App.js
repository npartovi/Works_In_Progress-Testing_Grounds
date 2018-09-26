import React, { Component } from 'react';
import Jumbotron from './components/layout/Jumbotron'
import NavBar from './components/layout/NavBar'
import MainContent from './components/layout/MainContent'
import './App.css';

class App extends Component { 
  render() {
    return (
      <div className="app">
          <NavBar />
          <Jumbotron />
          <MainContent />
      </div>
    );
  }
}

export default App;
