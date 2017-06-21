import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = [
    {
        name: 'Anoop',
        friend: true
    },
    {
        name: 'Mundathan',
        friend: false
    },
    {
        name: 'Hima',
        friend: true
    },
    {
        name: 'Ray',
        friend: false
    },
    {
        name: 'Sam',
        friend: true
    }
];

class App extends Component {
    render() {
        
        const friends = this.props.users.filter(user => user.friend === true);
        const nonFriends = this.props.users.filter(user => user.friend !== true);

        return(
            <div>
                <div>
                    <h1>Friends</h1>
                    <ul>
                        {friends.map(user => <li>{user.name}</li>)}
                    </ul> 
                </div>
                <div>
                    <h1>Non Friends</h1>
                    <ul>
                        {nonFriends.map(user => <li>{user.name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App users={user}/>, document.getElementById('app'));