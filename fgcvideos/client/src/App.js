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
            <h1>The Beast</h1>
            <VideoList id="UCT-WkUmMBrqDTXXAK4BOCbw" />
          </div>
          <div className="row">
            <h1>A-Cho</h1>
            <VideoList id="UCCfnriDcUslGMUMX4Ctkyjg" />
          </div>
          <div className="row">
            <h1>YogaFlame24</h1>
            <VideoList id="UC1UzB_b7NSxoRjhZZDicuqw" />
          </div>
      </div>
    );
  }
}

export default App;
