import React from 'react';
import {fetchPopularRepos} from '../util/api';
import Loading from './loading'


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

    return (
        <ul className='popular-list'>
          {props.repos.map(function (repo, index) {
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
            <div>
            <SelectedLanguage
                selectedLanguage={this.state.selectedLanguage}
                updateLanguage={this.updateLanguage}
            />
            {!this.state.repos ? <Loading />: <RepoGrid repos={this.state.repos} /> }
           </div>
        )
    }
}

export default Popular