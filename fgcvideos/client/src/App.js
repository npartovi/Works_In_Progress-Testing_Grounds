import React, { Component } from 'react';
import VideoList from './VideoList'




class App extends Component { 
  render() {
    return (
      <div className="App">
          <div className="row">
            <VideoList id="UCIq8ow2OP3mRqWDVm7aRXCA" />
          </div>
          <div className="row">
            <VideoList id="UCT-WkUmMBrqDTXXAK4BOCbw" />
          </div>
      </div>
    );
  }
}

export default App;
