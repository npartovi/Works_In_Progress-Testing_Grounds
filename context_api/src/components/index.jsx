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

    componentDidMount(){
        axios.get('https://api.twitch.tv/kraken/games/top?limit=100' ,{'headers': {'Client-ID': Keys.twitch }})
            .then(res => {
                let gamesList = []
                res.data.top.forEach(game => {
                    gamesList.push(game.game.name)
                })
                return gamesList

            })
            .then((gamesList) => {
                this.setState({gamesList}, this.randomStream)
            })
        
    }

    randomStream(){
        let randomGame = this.state.gamesList[Math.floor(Math.random() * this.state.gamesList.length)]

        axios.get('https://api.twitch.tv/kraken/streams?limit=20&game='+ randomGame, {'headers': {'Client-ID': Keys.twitch }})
            .then(res => {
                let randomChannel = res.data.streams[Math.floor(Math.random() * res.data.streams.length)].channel.name
                this.setState({randomChannel})
            });
    }

    renderStream(){
        if(this.state.randomChannel){
            return(
                <iframe src={`https://player.twitch.tv/?channel=${this.state.randomChannel}`} height="480" width="1080" frameBorder="0"></iframe>
            )
        }
    }

    render(){
        return(
            <div>
                random video
                <button onClick={this.randomStream}>Click here for a random stream</button>
                <div>
                    {this.renderStream()}
                </div>
            </div>
        )
    }
}

export default Index