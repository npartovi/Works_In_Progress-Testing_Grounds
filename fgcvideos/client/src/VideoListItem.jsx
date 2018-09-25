import React from 'react'


const VideoListItem = ({video}) => {
    console.log(video)
    const mediumThumbnail = video.snippet.thumbnails.medium.url
    const highThumbnail = video.snippet.thumbnails.high.url
    const videoId = video.id.videoId
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-list-item">
            <a href={videoUrl}>
                <img 
                    src={mediumThumbnail}
                    // onMouseOver={(e) => e.currentTarget.src = highThumbnail}
                    // onMouseOut={(e) => e.currentTarget.src = mediumThumbnail} 
                />
                <p>{video.snippet.title}</p>
            </a>
        </div>
    )
}

export default VideoListItem