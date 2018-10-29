import React, {Component} from 'react'
import VideoListItem from './VideoListItem'

class VideoList extends Component {

    render(){

        // if(this.props.video === null){
        //     return null
        // }
        
        const { videos } = this.props

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