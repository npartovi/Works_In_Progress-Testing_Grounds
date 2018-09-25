import React from 'react'


const VideoListItem = ({video}) => {
    console.log(video)
    const imgUrl = video.snippet.thumbnails.medium.url

    return(
        <div class="video-list-item-container">
            <img src={imgUrl} />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoListItem