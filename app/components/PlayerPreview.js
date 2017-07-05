import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = (props) => {
    return(
        <div className='player'>
            <img 
                src={props.avatar}
                alt={'Avatar for ' + props.username}/>
            <h3>@{props.username}</h3>
            {props.children}
        </div>
    );
}

PlayerPreview.PropTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default PlayerPreview;