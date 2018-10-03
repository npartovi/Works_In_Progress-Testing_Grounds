import channelList from './channel-id-list'
import keys from '../config'


const youtubeAPI = (channels) => {
    
    window.gapi.load("client", () => {

        window.gapi.client.setApiKey(keys.youtubeAPIKey);

        const searchRequest = (id) => {
            return window.gapi.client.request({
              'path': 'https://www.googleapis.com/youtube/v3/search',
              'params': {part: 'snippet', type: "video", channelId: id, order: "date", maxResults: 50}
             });
        };

        const request1 = searchRequest('UCIq8ow2OP3mRqWDVm7aRXCA')
        const request2 = searchRequest('UCT-WkUmMBrqDTXXAK4BOCbw')

        const batch = window.gapi.client.newBatch();
        
        batch.add(request1)
        batch.add(request2)
         
        batch.execute((res) => console.log(res))

        
    })
}

export default youtubeAPI

