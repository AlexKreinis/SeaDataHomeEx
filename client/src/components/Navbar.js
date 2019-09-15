import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  const closeNav = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <nav>
      <div className="hamburger" onClick={closeNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${openHamburger && 'openlinks'}`}>
        <li>
          <Link onClick={closeNav} to="/">
            Register
          </Link>
        </li>
        <li>
          <Link onClick={closeNav} to="/find">
            Find User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
