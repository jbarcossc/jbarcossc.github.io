import React, { Component } from 'react';
import '../styles/ContactLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class ContactLink extends Component {
    constructor(props) {
        super(props);
        library.add(fab);
    }
    render(){
        return (
            <a className="contact-link" href={this.props.href}>
                <FontAwesomeIcon icon={['fab', this.props.icon]} className="icon" />
                <p>{this.props.title}</p>
            </a>
        )
    }
}

export default ContactLink;