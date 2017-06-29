import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

class App extends Component {
    render() {
        return(
               <Router>
                   <div>
                       <Nav />
                        <div className='container'>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/popular' component={Popular}/>
                                <Route path='/battle' component={Battle}/>
                                <Route render={() => <p>Not Found</p>}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;