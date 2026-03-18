import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/now', label: 'Now' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/publications', label: 'IP & Pubs' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
];

const navStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.1 }
    }
};

const navItemVariant = {
    hidden: { opacity: 0, y: -8 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }
    }
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">Sandeep Vijayarao</Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <motion.nav
                        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
                        initial="hidden"
                        animate="visible"
                        variants={navStagger}
                    >
                        {navItems.map((item) => (
                            <motion.div key={item.path} variants={navItemVariant} className="nav-link-wrapper">
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                {location.pathname === item.path && (
                                    <motion.div
                                        className="nav-active-indicator"
                                        layoutId="nav-indicator"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.nav>
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
