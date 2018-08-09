import React from 'react';
import {fetchPopularRepos} from '../util/api';
import Loading from './loading'


const SelectedLanguage = ({selectedLanguage, onSelect}) => {

    const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']

    return(
        <ul className ="languages">
        {
            languages.map(function(lang){
                return (
                    <li
                        key={lang}
                        onClick={() => onSelect(lang)}
                        style={lang === selectedLanguage ? {color: 'red'} : null}
                    >
                        {lang}
                    </li>
                )
            }, this)
        }
        </ul>
    )
}

const RepoGrid = ({repos}) => {

    return (
        <ul className='popular-list'>
          {repos.map((repo, index) => {
            return (
              <li key={repo.name} className='popular-item'>
                <div className='popular-rank'>#{index + 1}</div>
                <ul className='space-list-items'>
                  <li>
                    <img
                      className='avatar'
                      src={repo.owner.avatar_url}
                    />
                  </li>
                  <li><a href={repo.html_url}>{repo.name}</a></li>
                  <li>@{repo.owner.login}</li>
                  <li>{repo.stargazers_count} stars</li>
                </ul>
              </li>
            )
          })}
        </ul>
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
        
        this.setState({
            selectedLanguage: lang,
            repos: null
        })

        fetchPopularRepos(lang)
            .then((repos) => this.setState({repos}))
    }

    render(){

        const { selectedLanguage, repos } = this.state
        
        return(
            <div>
            <SelectedLanguage
                selectedLanguage={selectedLanguage}
                onSelect={this.updateLanguage}
            />
            {!repos ? <Loading /> : <RepoGrid repos={repos} /> }
           </div>
        )
    }
}

export default Popular