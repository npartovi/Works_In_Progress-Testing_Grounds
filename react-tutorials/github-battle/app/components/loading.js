import React from 'react'

class Loading extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            text: props.text
        }
    }

    componentDidMount(){
        let stopper = this.props.text + '...'

        this.interval = window.setInterval(function(){
            if(this.state.text === stopper){
                this.setState({text: 'Loading'})
            }else{
                this.setState((prevState) => {
                    return {text: prevState.text + '.'}
                })
            }
        }, 300)
    }
    
    render(){
        return(
            <p className="loading-text">
            {this.state.text}
            </p>
        )
    }
}


Loading.defaultProps = {
    text: 'Loading'
}

export default Loading