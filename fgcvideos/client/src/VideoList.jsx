import React, {Component} from 'react'
import youtubeSearch from 'youtube-api-v3-search'
import './App.css';
import VideoListItem from './VideoListItem'
// import _ from 'lodash'
const API_KEY = 'AIzaSyBVOWDJTWMTdqWhkoguKVK1B9t3VWS68hA';

class VideoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            term: "third strike",
            videos: []
        }

        this.videoSearch = this.videoSearch.bind(this)
    }

    componentDidMount(){
        this.videoSearch(this.state.term)
    }

    videoSearch(term){    
        const options = {
          q: term,
          part: 'snippet',
          type: "video"
        }
    
        youtubeSearch(API_KEY, options)
          .then((res) => {
            this.setState({videos: res.items})
          })
      }



    render(){
        const { videos } = this.state

        const videoListRender = videos.map((video, idx) => (
            <VideoListItem key={idx} video={video} />
        ))

        return(
            <div>
                {videoListRender}
            </div>
        )
    }
}

export default VideoList