import React, { Component } from 'react'
import VideoList from '../video/VideoList'
import channelList from '../../util/channel-id-list'
import keys from '../../config'
import youtubeSearch from 'youtube-api-v3-search'

class MainContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            allVideos: []
        }
    }

    componentDidMount(){
        this.loadChannels()
    }

    loadChannels = () => {
        
        // let results = []

        channelList.forEach(channel => {
            const options = {
                part: 'snippet',
                type: "video",
                channelId: channel.id,
                order: "date",
                maxResults: 50,
            }

            youtubeSearch(keys.youtubeAPIKey, options)
                .then((res) => {
                    let newState = Object.assign({}, this.state)
                    newState.allVideos.push(res.items)
                    this.setState(newState)
                    // results.push(res.items)
                })
                .catch(err => console.error(err))
        })

        // this.setState({allVideos: results})

    }

    render(){
        
        console.log("state",this.state.allVideos)

        let mainContent = this.state.allVideos.map((videos, idx) => (
            <VideoList key={idx} videos={videos} />
        ))

        return(
            <div>
                {mainContent}
            </div>
        )
    }
}

export default MainContent