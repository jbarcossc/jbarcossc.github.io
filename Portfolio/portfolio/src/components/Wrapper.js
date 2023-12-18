import React, { Component } from 'react';
import '../styles/Wrapper.css';
import Welcome from './Welcome';
import Projects from './Projects';
import Contact from './Contact';

class Wrapper extends Component {
    render(){
        return (
            <main>
                <Welcome/>
                <Projects/>
                <Contact/>
            </main>
        )
    }
}

export default Wrapper;
