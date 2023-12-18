import React, { Component } from 'react';
import '../styles/Welcome.css';

class Welcome extends Component {
    render(){
        return (
            <section id="welcome-section">
                <h1>Hi! I am Juan Cruz Barcos</h1>
                <h2 className="text-fancy">A web developer</h2>
            </section>
        )
    }
}

export default Welcome;