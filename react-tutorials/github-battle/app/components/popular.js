import React from 'react'

class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang){
        
        this.setState(function(){
            return{
                selectedLanguage: lang
            }
        })
    }

    render(){
        const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python']

        return(
            <ul className ="languages">
                {
                    languages.map(function(lang){
                        return (
                            <li
                                key={lang}
                                onClick={this.updateLanguage.bind(null, lang)}
                                style={lang === this.state.selectedLanguage ? {color: 'red'} : null}
                            >
                                {lang}
                            </li>
                        )
                    }, this)
                }
            </ul>
        )
    }
}

export default Popular