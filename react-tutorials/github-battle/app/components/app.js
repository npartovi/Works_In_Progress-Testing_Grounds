import React from 'react';
import Popular from './popular';
import Nav from './nav';
import Home from './home';
import Battle from './battle'

const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends React.Component {

    render(){
        return(
            <Router>
            <div className="container">
                <Nav />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/popular" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route render={() =>{
                    return(<p>URL NOT FOUND</p>)
                }} />
                </Switch>
            </div>
            </Router>
        )
    }
}

export default App