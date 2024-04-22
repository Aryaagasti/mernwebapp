import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Hamburger from './Hamburger';
import { useAuth } from '../store/auth';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  // Invoking useAuth to get the isLoggedIn value
  const { isLoggedIn } = useAuth();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">AryaTechno</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            {/* Conditionally render Logout if isLoggedIn is true */}
            {isLoggedIn && (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            )}
            {/* Conditionally render Login and SignUp if isLoggedIn is false */}
            {!isLoggedIn && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">SignUp</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
