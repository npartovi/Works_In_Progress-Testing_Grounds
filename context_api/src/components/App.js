import React, { Component } from 'react';
import TwitchStream from './twitchStreams';
import YoutubeIndex from './youtubeStreams';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name:  'nima',
    age: 31,
    cool: false,

  }

  render(){
    return(
      <MyContext.Provider value={{
        state: this.state,
        increaseAge: () => this.setState({age: this.state.age + 1})
      }}>
          {this.props.children}
      </MyContext.Provider>
    )
  }
}

class App extends Component {
  
  render() {
    return (
      <MyProvider>
      <div className="main-grid-container">
        <TwitchStream />
        <YoutubeIndex />
      </div>
      </MyProvider>
      
    );
  }
}

export default App;
