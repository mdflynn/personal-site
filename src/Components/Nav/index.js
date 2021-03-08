import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const toggleDropdown = (e) => {
    e.preventDefault();
    const navContainer = document.getElementById("myTopnav");
    if (navContainer.className === "topnav") {
      navContainer.className += " responsive";
    } else {
      navContainer.className = "topnav";
    }
  };

  return (
    <nav className="topnav" id="myTopnav">
      <NavLink to="/" exact className="nav-link" activeClassName="active-nav">
        Home
      </NavLink>
      <NavLink to="/career" className="nav-link" activeClassName="active-nav">
        Career
      </NavLink>
      <NavLink
        to="/portfolio"
        className="nav-link"
        activeClassName="active-nav"
      >
        Portfolio
      </NavLink>
      <NavLink to="/resume" className="nav-link" activeClassName="active-nav">
        Resume
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active-nav">
        Contact
      </NavLink>
      <a
        href="/#"
        style={{ fontSize: "15px" }}
        className="icon"
        onClick={(e) => toggleDropdown(e)}
      >
        &#9776;
      </a>
    </nav>
  );
};

export default Nav;
