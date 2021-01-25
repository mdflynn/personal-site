import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/' exact className="nav-link" activeClassName="active-nav">
          <li>Home</li>
        </NavLink>
        <NavLink to='/about' className="nav-link" activeClassName="active-nav">
          <li>About</li>
        </NavLink>
        <NavLink to='/portfolio' className="nav-link" activeClassName="active-nav">
          <li>Portfolio</li>
        </NavLink>
        <NavLink to='/interests' className="nav-link" activeClassName="active-nav">
          <li>Interests</li>
        </NavLink>
        <NavLink to='/contact' className="nav-link" activeClassName="active-nav">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
