import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="logo.png" alt="Logo" className="navbar-logo" />
            </Link>
            {/* Additional Navbar Content Here */}
        </nav>
    );
};

export default Navbar;
