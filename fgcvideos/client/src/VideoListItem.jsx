import React, {Component} from 'react'


class VideoListItem extends Component {
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    

    onClick(e){
        console.log(e.target)
    }

    render(){
        const { video } = this.props
        const mediumThumbnail = video.snippet.thumbnails.medium.url
        const videoId = video.id.videoId
        const videoUrl = `https://www.youtube.com/embed/${videoId}`

        return(
            <div onClick={this.onClick} className="video-list-item">
                <img src={mediumThumbnail} />
            </div>
        )
    }
}

export default VideoListItem