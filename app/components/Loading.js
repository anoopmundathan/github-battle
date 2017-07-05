import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '20px'
    }
};

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    
    componentDidMount() {
        const stopper = this.props.text + '.....';
        this.interval = window.setInterval(() => {
            if(this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, this.props.wait);
    }
    
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return(
            <p style={styles.content}>
                {this.state.text}
            </p>
        );    
    }   
}

Loading.PropTypes = {
    text: PropTypes.string.isRequired,
    wait: PropTypes.number
};

Loading.defaultProps = {
    text: 'Loading',
    wait: 300
};

export default Loading;