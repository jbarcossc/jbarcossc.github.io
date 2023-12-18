import React, { Component } from 'react';
import '../styles/Projects.css';
import Project from './Project';

class Projects extends Component {
    projects_info = {
        0: { id: "project-survey", image: "surveyFormImage", href:"https://mattcoder3.github.io/survey-form/", title: "Survey Form"},
        1: { id: "project-tribute", image: "tributePageImage", href:"https://mattcoder3.github.io/tribute-page/", title: "Tribute Page"},
        2: { id: "project-documentation", image: "documentationPageImage", href:"https://mattcoder3.github.io/technical-documentation-page/", title: "Documentation Page"},
        3: { id: "project-landing", image: "landingPageImage", href:"https://mattcoder3.github.io/landing-page/", title: "Landing Page"}
    };

    render(){
        return (
            <section id="projects">
                <div id="projects-projects">
                    {Object.values(this.projects_info).map(element => (
                            <Project key={element.id} id={element.id} image={element.image} href={element.href} title={element.title}/>
                    ))}
                </div>
                <div id="profile-link-container">
                    <a id="profile-link" target="_blank" rel="noreferrer" href="https://github.com/mattcoder3">Show all</a>
                </div>
            </section>
        )
    }
}

export default Projects;