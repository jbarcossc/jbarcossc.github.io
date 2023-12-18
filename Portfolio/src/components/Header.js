import React, { Component } from 'react';
import '../styles/Header.css'

class Header extends Component {
    navbar_links = {
        0: { href: "#welcome-section", content: "About" },
        1: { href: "#projects", content: "Work" },
        2: { href: "#contact", content: "Contact" }
    };

    render() {
        return (
            <header>
                <nav id="navbar">
                    <span></span>
                    <div id="navbar-links">
                        {Object.values(this.navbar_links).map(element => (
                            <a key={element.href} className="navbar-link" href={element.href}>
                                {element.content}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;