import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">GitHub</a>
                    <a href="#" className="footer-link">Twitter</a>
                </div>
                <p>Copyright © {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
