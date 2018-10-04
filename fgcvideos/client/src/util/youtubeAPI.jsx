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

    const id1 = "UCIq8ow2OP3mRqWDVm7aRXCA"
    const id2 = "UCT-WkUmMBrqDTXXAK4BOCbw"

    let url1 = (`https://www.googleapis.com/youtube/v3/search?key=${keys.youtubeAPIKey}&part=snippet&type=video&maxResults=50&channelId=${id1}`)
    let url2 = (`https://www.googleapis.com/youtube/v3/search?key=${keys.youtubeAPIKey}&part=snippet&type=video&maxResults=50&channelId=${id2}`)

    

    let batch = window.gapi.client.newBatch()
    batch.add(url1)
    batch.add(url2)

    batch.then(res => {
        console.log(res)
    })



}

export default youtubeAPI

