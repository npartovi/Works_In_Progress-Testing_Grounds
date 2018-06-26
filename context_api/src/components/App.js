import React, { Component } from 'react';
import Index from './index'

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

class App extends Component {
  
  render() {
    return (
      <MyProvider>
      <div>
        <p>This is the App Component</p>
        <Index />
      </div>
      </MyProvider>
      
    );
  }
}


// const Family = (props) => (
//   <div className="family">
//     <Person />
//   </div>
// )

// class Person extends Component {
  
//     render(){
//       return(
//         <div className="person">
//             <MyContext.Consumer>
//               {(context) => (
//                 <Fragment>
//                   <p>{context.state.name}</p>
//                   <p>{context.state.age}</p>
//                   <button onClick={context.increaseAge}>increase age</button>
//                 </Fragment>
                
//               )}
//             </MyContext.Consumer>
//         </div>
//       )

//   }
// }




export default App;
