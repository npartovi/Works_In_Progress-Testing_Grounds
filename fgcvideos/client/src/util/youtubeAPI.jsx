import channelList from './channel-id-list'
import keys from '../config'
import axios from 'axios'


const youtubeAPI = (channels) => {
    
    // window.gapi.load("client", () => {
    //     window.gapi.client.load('youtube', 'v3', () => {
    //         window.gapi.client.setApiKey(keys.youtubeAPIKey);

    //         const searchRequest = (id) => {
    //             return window.gapi.client.request({
    //               'path': 'youtube/v3/search',
    //               'params': {part: 'snippet', type: "video", channelId: id, order: "date", maxResults: 50}
    //              });
    //         };

    //         let request1 = searchRequest('UCIq8ow2OP3mRqWDVm7aRXCA')
    //         let request2 = searchRequest('UCT-WkUmMBrqDTXXAK4BOCbw')

    //         let batch = window.gapi.client.newBatch();
            
    //         batch.add(request1)
    //         batch.add(request2)

    //         batch.then(res => console.log(res))

    //     })
    // })


    // axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId={"uploads" Id}&key=${keys.youtubeAPIKey}&part=snippet&maxResults=50`)

   
}

export default youtubeAPI

