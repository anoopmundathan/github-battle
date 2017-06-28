import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Link
} from 'react-router-dom';

import Popular from './Popular';

const Home = () => <div>Home component</div>
const Battle = () => <div>Battle component</div>

class App extends Component {
    render() {
        return(
               <Router>
                   <div>
                        <ul className='nav-container'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/battle'>Battle</Link></li>
                            <li><Link to='/popular'>Popular</Link></li>
                        </ul>
                        <div className='container'>
                            <Route path='/popular' component={Popular}/>
                            <Route exact path='/' component={Home}/>
                            <Route path='/battle' component={Battle}/>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;