import React from 'react';
import PropTypes from 'prop-types';
import {fetchPopularRepos} from '../util/api';


const SelectedLanguage = (props) => {

    const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']

    return(
        <ul className ="languages">
        {
            languages.map(function(lang){
                return (
                    <li
                        key={lang}
                        onClick={props.updateLanguage.bind(null, lang)}
                        style={lang === props.selectedLanguage ? {color: 'red'} : null}
                    >
                        {lang}
                    </li>
                )
            }, this)
        }
        </ul>
    )
}

const RepoGrid = (props) => {

    return(
        <div>
        <ul>
        {props.repos.map((repo, idx) => {
                <li key={repo.name}>{repo.name}</li>
                <div>
                <div className="popular-rank"> #{idx + 1} </div>
                </div>
                <ul className="space-list-items">
                    <li>
                        <img
                            className="avatar"
                            src={repo.owner.avatar_url}
                            alt={'Avatar for' + repo.owner.login} 
                        />
                    </li>
                    <li><a href={repo.html_url}>{repo.name}</a></li>
                    <li>@{repo.owner.login}</li>
                    <li>{repo.stargazers_count} stars</li>
                </ul>
            })
        }
        </ul>
        </div>
    )
}


class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang){
        
        this.setState(function(){
            return{
                selectedLanguage: lang,
                repos: null
            }
        })

        fetchPopularRepos(lang)
            .then((repos) => {
                this.setState({repos})
            })
    }

    render(){
        console.log(this.state)
        return(
           <SelectedLanguage
            selectedLanguage={this.state.selectedLanguage}
            updateLanguage={this.updateLanguage}
           />
           <RepoGrid />
        )
    }
}

export default Popular