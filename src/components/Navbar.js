import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand-title">AG🚀</div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
