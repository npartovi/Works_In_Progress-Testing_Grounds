import React, { Component } from 'react';
import VideoList from './VideoList'




class App extends Component { 
  render() {
    return (
      <div className="App">
          <div className="streetFighter">
            <VideoList />
          </div>

      </div>
    );
  }
}

export default App;
