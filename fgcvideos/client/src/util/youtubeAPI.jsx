import channelList from './channel-id-list'
import keys from '../config'
import axios from 'axios'


const youtubeAPI = (channels) => {
    
    // window.gapi.load("client", () => {
    //     window.gapi.client.setApiKey(keys.youtubeAPIKey);
    //     window.gapi.client.load('youtube', 'v3', () => {

    //         const searchRequest = (id) => {
    //             return window.gapi.client.request({
    //               'path': 'youtube/v3/search',
    //               'params': {part: 'snippet', type: "video", channelId: id, order: "date", maxResults: 50}
    //              });
    //         };

    //         const request1 = searchRequest('UCIq8ow2OP3mRqWDVm7aRXCA')
    //         const request2 = searchRequest('UCT-WkUmMBrqDTXXAK4BOCbw')

    //         const batch = window.gapi.client.newBatch();
            
    //         batch.add(request1)
    //         batch.add(request2)

    //         batch
    //             .then((res) => console.log(res))
            
           
    //     })
    // })

    // const id1 = "UCIq8ow2OP3mRqWDVm7aRXCA"
    // const id2 = "UCT-WkUmMBrqDTXXAK4BOCbw"

    // axios.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.youtubeAPIKey}&part=snippet&type=video&maxResults=50&channelId=${id1},${id2}`)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => console.error(err))


}

export default youtubeAPI

