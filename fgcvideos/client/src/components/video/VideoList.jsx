import React, {Component} from 'react'
import youtubeSearch from 'youtube-api-v3-search'
// import './App.css';
import VideoListItem from './VideoListItem'
import keys from '../../config'

class VideoList extends Component {

    render(){

        if(this.props.video === null){
            return null
        }
        
        const { videos } = this.props
        console.log(videos)

        const videoListRender = videos.map((video, idx) => (
            <VideoListItem key={idx} video={video} />
        ))

        return(
            <div className="row">
                <div className="row__inner">
                    {videoListRender}
                </div>
            </div>
        )
    }
}

export default VideoList