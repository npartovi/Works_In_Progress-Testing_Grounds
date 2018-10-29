import React, { Component } from 'react'
import VideoList from '../video/VideoList'
import channelList from '../../util/channel-id-list'
import keys from '../../config'
import youtubeSearch from 'youtube-api-v3-search'
// import youtubeAPI from '../../util/youtubeAPI'

class MainContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            allVideos: [],
            loading: true
        }
    }

    componentDidMount(){
        this.test()
    }

    test = () => {

        let results = []
        
        channelList.forEach(channel => {
            const options = {
                part: 'snippet',
                type: "video",
                channelId: channel.id,
                order: "date",
                maxResults: 50,
            }

            // let newState = Object.assign({}, this.state)
            // let newObject

            youtubeSearch(keys.youtubeAPIKey, options)
                .then((res) => {
                    // console.log(res)
                    // newObject = res.items
                    // console.log(newObject)
                    // newState.allVideos.push(newObject)
                    // this.setState(newState)
                    results.push(res.items)
                })
        })

        this.setState({allVideos: results, loading: false})

    }

    render(){

        if(this.state.allVideos.length === 2){
            console.log("hello")
        }
        
        const mainContent = this.state.allVideos.map((videos, idx) => (
            <VideoList key={idx} videos={videos} />
        ))

        console.log("state",this.state)

        return(
            <div>
                {this.state.loading ? <h1>hello</h1> : mainContent}
            </div>
        )
    }
}

export default MainContent