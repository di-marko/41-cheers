import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({config}) => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-link">
                <img src={config.branding.logoUrl} alt="Logo" className="navbar-logo" />
                <h1 className="navbar-logo-text">{config.branding.appName}</h1>
            </Link>
            {/* Additional navbar content here if needed */}
        </nav>
    );
};

export default Navbar;
