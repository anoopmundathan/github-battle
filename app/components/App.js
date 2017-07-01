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
import Results from './Results';

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
                                <Route exact path='/battle' component={Battle}/>
                                <Route path='/battle/results' component={Results}/>
                                <Route render={() => <p>Not Found</p>}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;