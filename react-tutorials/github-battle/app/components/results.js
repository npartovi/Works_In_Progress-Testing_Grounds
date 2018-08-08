import React from 'react'
import queryString from 'query-string'
import { battle } from '../util/api'
import {Link} from 'react-router-dom'

class Results extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: null,
        }
    }

    componentDidMount(){
        const players = queryString.parse(this.props.location.search)
        battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((results) => {
            if(results === null){
                this.setState({error: 'Looks like there was an error, check that both users exist', loading: false})
            }

            this.setState({error: null, winner: results[0], loser: results[1], loading: false})
        })
    }

    render(){
        const error = this.state.error
        const loading = this.state.loading
        const loser = this.state.loser
        const winner = this.state.winner

        if(loading === true){
            return (<p>Loading</p>)
        }

        if(error){
            return(
                <div>
                    <p>{error}</p>
                    <Link to="/battle">Reset</Link>
                </div>
            )
        }
        
        return(
            <div>{JSON.stringify(this.state, null, 2)}</div>
        )
    }
}

export default Results