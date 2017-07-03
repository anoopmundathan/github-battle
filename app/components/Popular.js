import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRepo } from '../utl/api';

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

const RepoGrid = (props) => {
    const repoList = props.repos.map(repo => {
        return(
            <li>
                <img src={repo.owner.avatar_url} />
            </li>
        );
    });
    return(
        <ul>
            {repoList}
        </ul>
    );
}

RepoGrid.PropTypes = {
    repos: PropTypes.array.isRequired
}

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
        this.setState({
            selectedLanguage: lang,
            repos: null
        });

        fetchRepo(lang)
            .then(repos => this.setState({
                repos: repos
        }));
    }

    render() {
        return(
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
                <div className='repo-container'>
                    {!this.state.repos
                    ? <div className='spinner'></div>
                    : <RepoGrid repos={this.state.repos}/>}
                </div>
            </div>
        );
    }
}

export default Popular;