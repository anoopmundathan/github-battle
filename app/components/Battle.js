import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

class Player extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    
    onInputChange(event) {
        const value = event.target.value;
        this.setState({
            username: value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
    }
    render() {
        return(
            <div className='player'>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <label className='header' htmlFor='username'>
                        {this.props.label}
                    </label>
                    <input 
                        id='username'
                        placeholder='github username'
                        className='input'
                        type='text'
                        value={this.state.username}
                        onChange={this.onInputChange.bind(this)}
                        autoComplete='off'/>
                    <button
                        className='button'
                        type='submit'
                        disabled={!this.state.username}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

Player.PropTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
    }
    
    onPlayerSubmit(id, name) {
        this.setState(() => {
            let newPlayer = {};
            newPlayer[id + 'Name'] = name;
            newPlayer[id + 'Image'] = `https://github.com/${name}.png?size=200`;
            return newPlayer;
        });
    }
    
    onReset(id) {
        this.setState(() => {
            let newPlayer = {};
            newPlayer[id + 'Name'] = '';
            newPlayer[id + 'Image'] = null;
            return newPlayer;
        });
    }

    render() {
        
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        const playerOneImage = this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage;
        const match = this.props.match;

        return(
            <div className='battle-container'>
                <div className='player-container'>
                    {!playerOneName &&
                        <Player 
                            id='playerOne' 
                            label='Player One'
                            onSubmit={this.onPlayerSubmit.bind(this)} />
                    }
                    {playerOneImage !== null &&
                        <PlayerPreview 
                            avatar={this.state.playerOneImage}
                            username={this.state.playerOneName}>
                            <button 
                                className='reset'
                                type='button'
                                onClick={this.onReset.bind(null, 'playerOne')}>
                                Reset
                            </button>
                        </PlayerPreview>
                    }
                    {!playerTwoName &&
                        <Player 
                            id='playerTwo' 
                            label='Player Two'
                            onSubmit={this.onPlayerSubmit.bind(this)} />
                    }
                    {playerTwoImage !== null &&
                        <PlayerPreview 
                            avatar={this.state.playerTwoImage}
                            username={this.state.playerTwoName}>
                             <button 
                                className='reset'
                                type='button'
                                onClick={this.onReset.bind(null, 'playerTwo')}>
                                Reset
                            </button>
                        </PlayerPreview>
                    }
                </div>

                <div>
                    {playerOneImage && playerTwoImage && 
                        <Link
                            className='button'
                            to={{
                                pathname: `${match.url}/results`,
                                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                            }}>
                            Battle
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

export default Battle;