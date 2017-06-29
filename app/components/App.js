import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';

const Battle = () => <h1>Battle me</h1>;

class App extends Component {
    render() {
        return(
               <Router>
                   <div>
                       <Nav />
                        <div className='container'>
                            <Route exact path='/' component={Home}/>
                            <Route path='/popular' component={Popular}/>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;