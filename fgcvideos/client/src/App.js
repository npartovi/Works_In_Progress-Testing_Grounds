import React, { Component } from 'react';
import VideoList from './VideoList'




class App extends Component { 
  render() {
    return (
      <div className="App">
          <div className="game-newton">
            <h1>Game Newton</h1>
            <VideoList id="UCIq8ow2OP3mRqWDVm7aRXCA" />
          </div>
          <div className="the-beast">
            <h1>The Beast</h1>
            <VideoList id="UCT-WkUmMBrqDTXXAK4BOCbw" />
          </div>

      </div>
    );
  }
}

export default App;
