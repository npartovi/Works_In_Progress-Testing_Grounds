import React, { Component } from 'react';
import TwitchStream from './twitchStreams';
import YoutubeIndex from './youtubeStreams';
import './styles/app.css'



class App extends Component {
  render() {
    return (
      <div className="main-grid-container">
        <TwitchStream />
        <YoutubeIndex />
      </div>
    );
  }
}

export default App;
