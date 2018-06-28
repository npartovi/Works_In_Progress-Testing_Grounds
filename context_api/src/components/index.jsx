import React, { Component } from 'react'
import axios from 'axios'
import Keys from './keys/keys'

class Index extends Component {
    constructor(props){
        super(props)

        this.state = {
            gamesList: [],
            randomChannel: ""
        }

        this.randomStream = this.randomStream.bind(this)
    }


    // componentDidUpdate(){
        
    //     let results = []
    //     this.state.videoList.forEach((game) => {
    //         // console.log(game.game.name)
    //         results.push(game.game.name)
    //     })        
    // }

    componentDidMount(){
        let results = []
        axios.get('https://api.twitch.tv/kraken/games/top?limit=100' ,{'headers': {'Client-ID': Keys.twitch }})
            .then(res => {
                res.data.top.forEach(game => {
                    results.push(game.game.name)
                })
            })
        this.setState({gamesList: results})
    }

    randomStream(){
        let randomGame = this.state.gamesList[Math.floor(Math.random() * this.state.gamesList.length)]

        let randomChannel = ""
        axios.get('https://api.twitch.tv/kraken/streams?limit=20&game='+ this.state.randomGame, {'headers': {'Client-ID': Keys.twitch }})
            .then(res => {
                randomChannel = res.data.streams[Math.floor(Math.random() * res.data.streams.length)]
            });

        this.setState({randomChannel: randomChannel})
        
        
    
    }

    // randomChannel(){
    //     let randomChannel = ""
    //     axios.get('https://api.twitch.tv/kraken/streams?limit=20&game='+ this.state.randomGame, {'headers': {'Client-ID': Keys.twitch }})
    //         .then(res => {
    //             randomChannel = res.data.streams[Math.floor(Math.random() * res.data.streams.length)]
    //         });

    //     this.setState({randomChannel: randomChannel})
    // }


    render(){
        console.log(this.state)
        return(
            <div>
                random video
                <button onClick={this.randomStream}>Click here for a random stream</button>
                <div>
                    This is where the stream will render
                </div>
            </div>
        )
    }
}


export default Index