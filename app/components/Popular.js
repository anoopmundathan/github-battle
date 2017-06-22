import React, { Component } from 'react';

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        }

        // 5. Declaring bind again
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        // 1. Option - Updating state
        // this.setState({
        //     selectedLanguage: lang
        // });

        // 2. Option - Updating State
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });

    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return(
            <div>
                <ul className='languages'>

                   {/* 1. Bind */}
                    {/*{languages.map(function(lang) {
                        return(
                            <li 
                                key={lang}
                                onClick={this.updateLanguage.bind(this, lang)}>
                                {lang}
                            </li>
                        );
                    }.bind(this))}*/}
                    {/*-----------------------------------------------------------*/}
                    {/* 2. Pass second argument in map */}
                    {/*{languages.map(function(lang) {
                        return(
                            <li 
                                key={lang}
                                onClick={this.updateLanguage.bind(this, lang)}>
                                {lang} 
                            </li>
                        );
                    }, this)}*/}
                    {/*-----------------------------------------------------------*/}
                    {/*3 .Arrow functions - Example 1*/}
                    {/*{languages.map(lang => {
                        return(
                            <li 
                                key={lang}
                                onClick={this.updateLanguage.bind(this, lang)}>
                                {lang} 
                            </li>
                        );
                    })}*/}

                    {/*-----------------------------------------------------------*/}                    
                    {/*4 . Use Arrow functions for all - Example 2*/}
                    {/*{languages.map(lang => {
                        return(
                            <li 
                                key={lang}
                                onClick={() => this.updateLanguage(lang)}>
                                {lang} pp
                            </li>
                        );
                    })}*/}
                    {/*-----------------------------------------------------------*/}
                    {/*5. Declaring bind again*/}
                    {languages.map(function(lang) {
                        return(
                            <li 
                                key={lang}
                                style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null}
                                onClick={this.updateLanguage.bind(null, lang)}>
                                {lang}
                            </li>
                        );
                    }, this)}
                </ul>
            </div>
        );
    }
}

export default Popular;