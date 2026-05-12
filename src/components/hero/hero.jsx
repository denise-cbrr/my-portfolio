import React from 'react'
import './hero.css'

function Hero() {
    return (
        <section className="hero">
            <p className="greeting">Hello! My name is</p>
            <h1 className="hero-title">Denise Pawleen Cabrera</h1>
            <p className="hero-description">Computer Science Student @ Yale University</p>
            <div className="item-line">
                <p className="item-name">SWE Intern</p>
                <p className="item-name">&&</p>
                <p className="item-name">Undergraduate Learning Assistant (CS - Data Structures)</p>
            </div>
            <div className="links-line">
                <a href="https://github.com/denise-cbrr" className="link">GitHub</a>
                <a href="https://www.linkedin.com/in/denisepawleencabrera/" className="link">LinkedIn</a>
            </div>

            <div className="scroll-indicator">
                <p>Get to Know Me</p>
                <p>↓</p>
            </div>
        </section>
        
    )
}

export default Hero