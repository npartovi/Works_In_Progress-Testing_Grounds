import channelList from './channel-id-list'
import keys from '../config'


const youtubeAPI = (channels) => {

   

   

    // const batch = window.gapi.client.newBatch();
    // batch.add(request1)
    // batch
    //     .then((res) => {
    //         console.log(res)
    //     })








    window.gapi.load("client", () => {
        window.gapi.client.setApiKey(keys.youtubeAPIKey);
        console.log("gapi loaded")

        const batch = window.gapi.client.newBatch();
        
        const searchRequest = (id) => {
            return window.gapi.client.request({
              'path': 'youtube/v3/channels',
              'params': {part: 'snippet', type: "video", id: id, order: "date", maxResults: 50}
             });
        };

         const request1 = searchRequest('UCIq8ow2OP3mRqWDVm7aRXCA')
         request1
            .then(res => {
                console.log(res.result.items)
        })

        // channelList.forEach((channel) => {
        //     let request = searchRequest(channel.id)
        //     batch.add(request)
        // })

        // batch.then((res) => {
        //     console.log(res.body)
        // })









    })


}

export default youtubeAPI