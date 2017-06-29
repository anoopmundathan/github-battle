import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='home-container'>
            <h1>Github Battle. Battle with your friends</h1>
            <Link className='button' to='/battle'>
                Button
            </Link>
        </div>
    );
}

export default Home;