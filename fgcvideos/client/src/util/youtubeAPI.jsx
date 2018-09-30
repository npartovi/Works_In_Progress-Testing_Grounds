import channelList from './channel-id-list'
import keys from '../config'


const youtubeAPI = (channels) => {


    window.gapi.load("client", () => {
        window.gapi.client.setApiKey(keys.youtubeAPIKey);
        console.log("gapi loaded")

        const batch = window.gapi.client.newBatch();
        
        const searchRequest = (id) => {
            return window.gapi.client.request({
              'path': 'youtube/v3/search',
              'params': {part: 'snippet', type: "video", channelId: id, order: "date", maxResults: 50}
             });
        };

        const request1 = searchRequest('UCIq8ow2OP3mRqWDVm7aRXCA')
        const request2 = searchRequest('UCT-WkUmMBrqDTXXAK4BOCbw')
        
        batch.add(request1)
        batch.add(request2)
         
        batch
            .then((res) => console.log(res))









    })


}

export default youtubeAPI