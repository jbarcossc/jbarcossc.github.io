import React, { Component } from 'react';
import '../styles/Contact.css'
import ContactLink from './ContactLink';

class Contact extends Component {
    contact_info = {
        0: { id: "youtube", icon: "fa-youtube", href:"https://www.youtube.com/@mattcoder3", title: "YouTube"},
        1: { id: "tiktok", icon: "fa-tiktok", href:"https://www.tiktok.com/@mattcoder3", title: "TikTok"},
        2: { id: "github", icon: "fa-github", href:"https://github.com/jbarcossc", title: "GitHub"},
        3: { id: "linkedin", icon: "fa-linkedin", href:"https://www.linkedin.com/in/juan-barcos/", title: "LinkedIn"}
    };
    render(){
        return (
            <section id="contact">
                <h3>Let's work together</h3>
                <p className="text-fancy">How do you take your coffee?</p>
                <div className="contact-info">
                    {Object.values(this.contact_info).map(element => (
                            <ContactLink id={element.id} icon={element.icon} href={element.href} title={element.title} key={element.id}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default Contact;