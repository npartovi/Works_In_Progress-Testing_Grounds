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
        const mediumThumbnail = video.snippet.thumbnails.high.url
        const title = video.snippet.title
        const videoId = video.id.videoId
        

        return(
            <React.Fragment>
                <div onClick={this.showModal} className="video-list-item">
                    <img src={mediumThumbnail}/>
                    <div class="tile__details">
                        <div class="tile__title">
                            {title}
                        </div>
                    </div>
                </div>
                <VideoModal show={this.state.modalOpen} hideModal={this.hideModal} videoId={videoId} />
            </React.Fragment>
        )
    }
}

export default VideoListItem