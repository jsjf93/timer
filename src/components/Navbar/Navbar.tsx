import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
