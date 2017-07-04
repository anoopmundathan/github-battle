import React, { Component } from 'react';
import queryString from 'query-string';
import { battle } from '../utl/api';


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
            this.setState({
                winner: results[0].profile.name,
                looser: results[1].profile.name,
                loading: false
            })
        });
    }

    render() {     
        const error = this.state.error;
        const winner = this.state.winner;
        const looser = this.state.looser;
        const loading = this.state.loading;

        if (loading === true) {
            return(
                <p>Loading...</p>
            );
        } else {
            return(
                <div>
                    <h1>Winner: {this.state.winner}</h1>
                    <h1>Looser: {this.state.looser}</h1>
                </div>
            );
        }   
    }
}

export default Results;