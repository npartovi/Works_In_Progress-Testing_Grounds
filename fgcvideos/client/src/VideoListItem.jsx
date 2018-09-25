import React from 'react'


const VideoListItem = ({video}) => {
    console.log(video)
    const imgUrl = video.snippet.thumbnails.medium.url
    const videoId = video.id.videoId
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-list-item-container">
            <a href={videoUrl}>
                <img src={imgUrl} />
                <p>{video.snippet.title}</p>
            </a>
        </div>
    )
}

export default VideoListItem