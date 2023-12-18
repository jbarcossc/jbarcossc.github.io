import React, { Component } from 'react';
import '../styles/Project.css';
import * as projectImages from '../images';

class Project extends Component {
    render() {
        return (
            <a id={this.props.id} className="project-tile" href={this.props.href} target='_blank' rel="noreferrer">
                <div className="project-image">
                    <img src={projectImages[this.props.image]} alt={this.props.title + " project"} />
                </div>
                <div className="project-link">
                    <span className="project-link-detail">&lt;</span>{this.props.title}<span className="project-link-detail">/&gt;</span>
                </div>
            </a>
        );
    }
}

export default Project;