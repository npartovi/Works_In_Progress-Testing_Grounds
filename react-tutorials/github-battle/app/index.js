import React from 'react';
import ReactDOM from 'react-dom';

require('./index.css');

class App extends React.Component {

    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))



