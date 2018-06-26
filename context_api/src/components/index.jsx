import React, { Component } from 'react'
import axios from 'axios'

class Index extends Component {
    constructor(props){
        super(props)

        this.state = {
            videoList: ""
        }
    }


    componentDidMount(){
        axios.get('https://api.twitch.tv/helix/streams?first=20',{'headers': {'Client-ID': '2bjd68f3pi5ak6nn0ch2sk60x4kkfu'}})
            .then( res => {
                this.setState({videoList: res.data})
            })
    }

    render(){
        console.log(this.state.videoList)
        return(
            <p>This is the Index page</p>
        )
    }
}


export default Index