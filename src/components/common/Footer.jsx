import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/sandeepvijayarao/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <a href="https://github.com/sandeepvijayarao09" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                    <a href="mailto:sandeepvijayarao07@gmail.com" className="footer-link">Email</a>
                </div>
                <p>Copyright © {new Date().getFullYear()} Sandeep Vijayarao. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
