import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchRepo from '../utl/api';

const SelectLanguage = (props) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
        <ul className='languages'>
            {languages.map(lang => {
                return (
                    <li className='language'
                        key={lang}
                        onClick={props.onSelect.bind(null, lang)}
                        style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}>
                        {lang}
                    </li>
                );
            })}
        </ul>
    );
}

SelectLanguage.PropTypes = {
    onSelect: PropTypes.func.isRequired,
    selectedLanguage: PropTypes.string.isRequired
}

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: []
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        let apiUrl = `https://api.github.com/search/repositories?q=${this.state.selectedLanguage}&sort=stars&order=desc`;
        fetchRepo(apiUrl)
            .then(repo => console.log(repo));
    }

    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
        let apiUrl = `https://api.github.com/search/repositories?q=${this.state.selectedLanguage}&sort=stars&order=desc`;

        fetchRepo(apiUrl)
            .then(repos => {
                this.setState({
                    repos: repos.items
                });
            });

    }

    render() {
        const reposList = this.state.repos.map(repo => {
            return(
                <li>
                    <img src={repo.owner.avatar_url} />
                </li>
            );
        })
        return(
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
                <div className='repo-container'>
                    <ul>
                        {reposList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Popular;