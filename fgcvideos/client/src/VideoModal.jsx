import React from 'react'

const VideoModal = ({show, hideModal, videoUrl}) => {

    let showModalClassName = show ? 'modal display-block' : 'modal display-none'
    console.log(showModalClassName)

    return(
        <div className={showModalClassName}>
            <section className="modal-main">
			    <iframe src={videoUrl} width="1024" height="480"></iframe>
                <button type="button" onClick={hideModal}>close</button>
            </section>
        </div>
    )
}

export default VideoModal