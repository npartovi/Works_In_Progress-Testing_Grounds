import React from 'react'


const VideoListItem = ({video}) => {
    console.log(video)
    const imgUrl = video.snippet.thumbnails.medium.url

    return(
        <div>
            <img src={imgUrl} />
            
        </div>
    )
}

export default VideoListItem