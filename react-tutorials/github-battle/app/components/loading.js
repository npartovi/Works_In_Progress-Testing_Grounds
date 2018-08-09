import React from 'react'

class Loading extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            text: props.text
        }
    }

    componentDidMount(){

        const {text} = this.props

        const stopper = text + '...'

        this.interval = window.setInterval(() => {
            this.state.text === stopper 
                ? this.setState({text: this.props.text}) 
                : this.setState((prevState) => ({text: prevState.text + '.'}))
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