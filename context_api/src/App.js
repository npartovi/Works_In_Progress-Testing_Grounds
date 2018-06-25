import React, { Component, Fragment } from 'react';
import './App.css';


// first make the context
const MyContext = React.createContext();

//then create a provider component
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


const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  
    render(){
      return(
        <div className="person">
            <MyContext.Consumer>
              {(context) => (
                <Fragment>
                  <p>{context.state.name}</p>
                  <p>{context.state.age}</p>
                  <button onClick={context.increaseAge}>increase age</button>
                </Fragment>
                
              )}
            </MyContext.Consumer>
        </div>
      )

  }
}


class App extends Component {
  
  render() {
    return (
      <MyProvider>
      <div>
        <p>I am the ape man</p>
        <Family/>
      </div>
      </MyProvider>
      
    );
  }
}

export default App;
