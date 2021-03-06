import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className='logo-div'>
        <p className='logo'>MF</p>
      </div>
      <ul>
        <NavLink to='/' exact className='nav-link' activeClassName='active-nav'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/career' className='nav-link' activeClassName='active-nav'>
          <li>Career</li>
        </NavLink>
        <NavLink
          to='/portfolio'
          className='nav-link'
          activeClassName='active-nav'
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to='/resume'
          className='nav-link'
          activeClassName='active-nav'
        >
          <li>Resume</li>
        </NavLink>
        <NavLink
          to='/contact'
          className='nav-link'
          activeClassName='active-nav'
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
