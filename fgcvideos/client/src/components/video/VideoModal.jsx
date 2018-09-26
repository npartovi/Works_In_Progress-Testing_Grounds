import React, { Component } from 'react'
import YTEmbedLazyLoad from '../../util/youtube-embed-lazy-load'

class VideoModal extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        YTEmbedLazyLoad()
    }

    render(){
        const {videoId, hideModal, show } = this.props
        let showModalClassName = show ? 'modal display-block' : 'modal display-none'

        return(
            <div className={showModalClassName}>
                <section className="modal-main">
                    <div className="youtube-player" data-id={videoId}></div>
                    <button type="button" onClick={hideModal}>close</button>
                </section>
            </div>
        )
    }

}

export default VideoModal