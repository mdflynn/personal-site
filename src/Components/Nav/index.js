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
        <NavLink to='/about' className='nav-link' activeClassName='active-nav'>
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
          to='/tech'
          className='nav-link'
          activeClassName='active-nav'
        >
          <li>Tech</li>
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
