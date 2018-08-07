import React from 'react'
import Popular from './popular'

const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends React.Component {

    render(){
        return(
            <div className="container">
                <Popular />
            </div>
        )
    }
}

export default App