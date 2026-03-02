import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">Sandeep Vijayarao</Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/now" className="nav-link" onClick={() => setIsMenuOpen(false)}>Now</Link>
                        <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        <Link to="/experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</Link>
                        <Link to="/publications" className="nav-link" onClick={() => setIsMenuOpen(false)}>IP & Pubs</Link>
                        <Link to="/education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</Link>
                        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>
                    <ThemeToggle />
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? '×' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
