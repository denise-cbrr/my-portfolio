import React from 'react'
import './about.css'

function About() {
    return (
        <section className="about">
            <div className="about-col">
                <h2>How I Think</h2>
                <p>I'm a third-year computer science student at Yale University with a curiosity for how systems work and a love for the puzzle-solving nature of CS. 
                    I enjoy thinking through problems carefully — exploring different approaches and theorizing possible solutions before diving in.
                    I'm currently exploring different areas in Computer Science, while still diving deep in my areas of interest.</p>
                <p>As a SWE Intern I've built website templates for clients across various industries, gaining hands-on experience with frontend frameworks and modern design principles.
                    As an Undergraduate Learning Assistant for Data Structures, I've had the opportunitiy to mentor students through office hours and discussion sections, helping them grasp new concepts, visualize problems, and debug code.
                    In both roles, I've developed strong communication skills and a passion for sharing knowledge, which I hope to continue cultivating in future opportunities.   
                </p>
            </div>
            <div className="about-col">
                <h2>Quick Facts</h2>
                <ul>
                    <li>From Wai'anae, Hawai'i</li>
                    <li>Lang Exp: C, Python, Racket</li>
                    <li>Tech Exp: HTML, CSS, React, Angular</li>
                    <li>Currently Learning: C++, Javascript</li>
                    <li>Interested In: SWE, Robotics, Systems, Machine Learning</li>
                    <li>Goals: Build more projects!</li>
                    <li>Other Hobbies: Photography, Music, Reading</li>
                </ul>
            </div>
        </section>
    )
}

export default About