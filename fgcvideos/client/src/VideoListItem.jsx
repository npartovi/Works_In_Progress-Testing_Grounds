import React from 'react'


const VideoListItem = ({video}) => {

    const imgUrl = video.snippet.thumbnails.default.url
    return(
        <div>
            <img src={imgUrl} />
        </div>
    )
}

export default VideoListItem