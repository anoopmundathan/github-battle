import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { battle } from '../utl/api';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';

const Profile = (props) => {
    const profile = props.profile;
    return(
        <PlayerPreview
            avatar={profile.avatar_url}
            username={profile.login}>
            <ul>
                {profile.name && <li>{profile.name}</li>}
                {profile.location && <li>{profile.location}</li>}
                <li>{`Followers: ${profile.followers}`}</li>
                <li>{`Following: ${profile.following}`}</li>
                <li>{`Public Repos: ${profile.public_repos}`}</li>
                {profile.blog && <li><a href={profile.blog}>{profile.blog}</a></li>}
            </ul>
        </PlayerPreview>
    );
}

Profile.PropTypes = {
    profile: PropTypes.object.isRequired
}

const Player = (props) => {
    return(
        <div className='player'>
            <h1 className='header'>{props.label}</h1>
            <h3 style={{textAlign: 'center'}}>{props.score}</h3>
            <Profile profile={props.profile}/>
        </div>
    );
}

Player.PropTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
}

class Results extends Component {
    
    constructor() {
        super();
        this.state ={
            winner: null,
            looser: null,
            error: null,
            loading: true
        }
    }
    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        battle([
            parsed.playerOneName, 
            parsed.playerTwoName
        ]).then(results => {

            if(results === null) {
                this.setState({
                    error: 'There was an error, check github username',
                    loading: false
                });
            }

            this.setState({
                winner: results[0],
                looser: results[1],
                error: null,
                loading: false
            });

        });
    }

    render() {     
        
        const error = this.state.error;
        const winner = this.state.winner;
        const looser = this.state.looser;
        const loading = this.state.loading;

        if (error) {
            return(
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            );
        }

        if (loading === true) {
            return(
                <Loading wait={300}/>
            );
        } else {
            return(
                <div className='results-container'>     
                    <div className='result-container'>
                        <Player
                            label='Winner'
                            score={winner.score}
                            profile={winner.profile}/>
                    </div>                   
                    <div className='result-container'>
                        <Player
                            label='Looser'
                            score={looser.score}
                            profile={looser.profile}/>
                    </div>
                </div>
            );
        }   
    }
}

export default Results;