import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Nav = () => {
    return(
        <ul className='nav-container'>
            <li><NavLink activeClassName='active' exact to='/'>
                Home
                </NavLink>
            </li>
            <li><NavLink activeClassName='active' to='/battle'>
                Battle
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'>
                Popular
                </NavLink>
            </li>
        </ul>
    );
}

export default Nav;