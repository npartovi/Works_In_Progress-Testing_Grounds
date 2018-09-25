import React, { Component } from 'react'

class VideoModal extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.youtubeEmbedLazyLoad()
    }

    youtubeEmbedLazyLoad(){

        function labnolThumb(id) {
            var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
                play = '<div class="play"></div>';
            return thumb.replace("ID", id) + play;
        }
    
        function labnolIframe() {
          console.log("hello")
            var iframe = document.createElement("iframe");
            var embed = "https://www.youtube.com/embed/ID?autoplay=1";
            iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "1");
            this.parentNode.replaceChild(iframe, this);
        }

        var div, n,
                  v = document.getElementsByClassName("youtube-player");
              for (n = 0; n < v.length; n++) {
                  div = document.createElement("div");
                  div.setAttribute("data-id", v[n].dataset.id);
                  div.innerHTML = labnolThumb(v[n].dataset.id);
                  div.onclick = labnolIframe;
                  v[n].appendChild(div);
              }
    }

    render(){

        const {videoId, hideModal, show } = this.props
        let showModalClassName = show ? 'modal display-block' : 'modal display-none'

        return(
            <div className={showModalClassName}>
                <section className="modal-main">
                    <div className="youtube-player" data-id={videoId}></div>
                    <button type="button" onClick={hideModal}>close</button>
                </section>
            </div>
        )
    }

}

export default VideoModal