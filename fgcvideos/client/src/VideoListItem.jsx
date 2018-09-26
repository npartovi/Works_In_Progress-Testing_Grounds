import React, {Component} from 'react'
import VideoModal from './VideoModal'


class VideoListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            modalOpen: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    

    showModal(e){
        this.setState({modalOpen: true})
    }

    hideModal(e){
        
        this.setState({modalOpen: false})
    }

    render(){
        const { video } = this.props
        const mediumThumbnail = video.snippet.thumbnails.medium.url
        const videoId = video.id.videoId

        return(
            <div onClick={this.showModal} className="video-list-item">
                <img src={mediumThumbnail}/>
                <VideoModal show={this.state.modalOpen} hideModal={this.hideModal} videoId={videoId} />
            </div>
        )
    }
}

export default VideoListItem