import React, { Component } from 'react'
import VideoList from '../video/VideoList'
import channelList from '../../util/channel-id-list'

class MainContent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const mainContent = channelList.map((channel, idx) => (
            <div key={idx} className="row">
                <h1>{channel.name}</h1>
                <VideoList id={channel.id} />
            </div>
        ))

        return(
            <div>
                {mainContent}
            </div>
        )
    }
}

export default MainContent