import React from 'react'
import queryString from 'query-string'
import { battle } from '../util/api'
import { Link } from 'react-router-dom'
import PlayerPreview from './playerpreview'
import Loading from './loading'



const Profile = ({info}) => {

    const {avatar_url, login, name, location, company, followers, following, public_repos, blog} = info
    return(
        <PlayerPreview avatar={avatar_url} username={login}>
            <ul className="space-list-items">
                {info.name && <li>{name}</li>}
                {location && <li>{location}</li>}
                {company && <li>{company}</li>}
                <li>Followers: {followers}</li>
                <li>Following: {following}</li>
                <li>Public Repos: {public_repos}</li>
                {blog && <li><a href={blog}>{blog}</a></li>}
            </ul>
        </PlayerPreview>
    )
}

const Player = ({label, score, profile}) => {

    return(
        <div>
            <h1 className="header">{label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <Profile info={profile} />
        </div>
    )
}


class Results extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true,
        }
    }

    componentDidMount(){
        const {playerOneName, playerTwoName } = queryString.parse(this.props.location.search)
        battle([
            playerOneName,
            playerTwoName
        ]).then((results) => {
            if(results === null){
                this.setState({error: 'Looks like there was an error, check that both users exist', loading: false})
            }

            this.setState({error: null, winner: results[0], loser: results[1], loading: false})
        })
    }

    render(){
        const {error, loading, loser, winner } = this.state

        if(loading === true){
            return (<Loading />)
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
            <div className="row">
                <Player 
                    label="Winner"
                    score={winner.score}
                    profile={winner.profile}
                />

                <Player 
                    label="Loser"
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        )
    }
}

export default Results