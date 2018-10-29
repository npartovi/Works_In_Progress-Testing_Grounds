import React, {Component } from 'react'

class NavBar extends Component {

    render(){
        return(
            <nav>
                <div className="logo">
                    <img alt="" src={require("../../images/logo.png")}/>
                </div>
                <div className="nav-bar-links">

                </div>
            </nav>
        )
    }
}

export default NavBar