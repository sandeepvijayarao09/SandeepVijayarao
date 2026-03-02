import React from 'react';
import './HeroSection.css';

const Hero = ({ title, subtitle }) => {
    return (
        <section className="hero-section">
            <h1 className="typography-hero">{title}</h1>
            {subtitle && <p className="typography-section-headline hero-subtitle" style={{ fontSize: '24px', color: 'var(--text-secondary)' }}>{subtitle}</p>}
        </section>
    );
};

export default Hero;
