import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/home'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li>About</li>
        </NavLink>
        <NavLink to='/portfolio'>
          <li>Portfolio</li>
        </NavLink>
        <NavLink to='/interests'>
          <li>Interests</li>
        </NavLink>
        <NavLink to='/contact'>
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
