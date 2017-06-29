import React, { Component } from 'react';

class Battle extends Component {
    render() {
        return(
            <div className='player-container'>
                <div className='player-one'>
                    <h2>Player One</h2>
                    <input className='input' type="text"/>
                    <input className='button' type="submit"/>
                </div>
                <div className='player-two'>
                    <h2>Player Two</h2>
                    <input className='input' type="text"/>
                    <input className='button' type="submit"/>
                </div>
            </div>
        );
    }
}

export default Battle;