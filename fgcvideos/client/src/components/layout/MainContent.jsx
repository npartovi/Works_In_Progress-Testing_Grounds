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
        this.test()
    }

    test(){

        channelList.forEach(channel => {
            const options = {
                part: 'snippet',
                type: "video",
                channelId: channel.id,
                order: "date",
                maxResults: 50,
            }

            let newState = Object.assign({}, this.state)
            let newObject

            youtubeSearch(keys.youtubeAPIKey, options)
                .then((res) => {
                    newObject = res.items
                    newState.allVideos.push(newObject)
                    this.setState(newState)
                })
        })
    }

    render(){

        
        const mainContent = this.state.allVideos.map((videos) => (
            <VideoList videos={videos} />
        ))

        return(
            <div>
                {mainContent}
            </div>
        )
    }
}

export default MainContent