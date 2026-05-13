import React from 'react'
import './hero.css'

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-title">Denise Pawleen Cabrera</h1>
            <div className="hero-content">
                <p className="primary">Third Year Computer Science Student @ Yale University</p>
                <p className="secondary">SWE Intern & Undergraduate Learning Assistant (Data Structures)</p>
                
                <div className="links-line">
                    <a href="https://github.com/denise-cbrr" className="link">GitHub</a>
                    <a href="https://www.linkedin.com/in/denisepawleencabrera/" className="link">LinkedIn</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <p>Get to Know Me</p>
                <p>↓</p>
            </div>
        </section>
        
    )
}

export default Hero