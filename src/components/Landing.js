import React, { Component } from 'react';
import '../styles/Landing.css'

class Landing extends Component {

    render() {
        return (
            <div id="home">
                <div><h1>WHO'S WACHING?</h1></div>
                <div id="home-container">
                    <div id="Rayan"><span className="main-directory-text">Rayan</span></div>
                    <div id="Neymar"><span className="main-directory-text">Neymar</span></div>
                    <div id="Ran"><span className="main-directory-text">Ran</span></div>
                </div>
            </div>

            
        );
    }
}

export default Landing;