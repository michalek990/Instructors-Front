import React from 'react';
import './styles.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Spring for instructors. All rights reserved.</p>
                <div className="social-links">
                    {/* Add social media or other links here */}
                    <a href="http://twitter.com">Twitter</a>
                    <a href="http://facebook.com">Facebook</a>
                    <a href="http://instagram.com">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
