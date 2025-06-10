import React, { useState } from 'react';
import logo from '../assets/shared/logo.svg';
import hamburgerIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <hr className="divider" />

        <img
          src={isOpen ? closeIcon : hamburgerIcon}
          alt="menu"
          className="hamburger"
          onClick={toggleNav}
        />

        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/" onClick={() => setIsOpen(false)}><b>00</b> Home</NavLink></li>
            <li><NavLink to="/destination" onClick={() => setIsOpen(false)}><b>01</b> Destination</NavLink></li>
            <li><NavLink to="/crew" onClick={() => setIsOpen(false)}><b>02</b> Crew</NavLink></li>
            <li><NavLink to="/technology" onClick={() => setIsOpen(false)}><b>03</b> Technology</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
