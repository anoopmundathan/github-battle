import React, { Component } from 'react';
import queryString from 'query-string';

const parse = (str) => {

    if(typeof str !== 'string') {
        return {}
    }

    str = str.trim().replace(/^\?/, '');

    if(!str) {
        return {}
    }

    return str.trim().split('&').reduce((ret, param) => {
        var parts = param.split('=');
        ret[parts[0]] = parts[1] === undefined ? null : decodeURIComponent(parts[1]);
        return ret;
    }, {});
    
}

class Results extends Component {
    
    render() {
        
        const parsed = parse(this.props.location.search);
        console.log(parsed);

        return(
            <div>
                Result Component
            </div>
        );
    }
}

export default Results;