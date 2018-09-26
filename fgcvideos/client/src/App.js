import React, { Component } from 'react';
import VideoList from './VideoList'




class App extends Component { 
  render() {
    return (
      <div className="app">
          <div className="row">
            <h1>Game Newton</h1>
            <VideoList id="UCIq8ow2OP3mRqWDVm7aRXCA" />
          </div>
          <div className="row">
            <h1>Game Newton</h1>
            <VideoList id="UCT-WkUmMBrqDTXXAK4BOCbw" />
          </div>
      </div>
    );
  }
}

export default App;
