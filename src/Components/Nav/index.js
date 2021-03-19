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

  const resetDropdown = () => {
    setTimeout(() => {
      const navContainer = document.getElementById("myTopnav");
      navContainer.className = "topnav";
    }, 100);
  };

  return (
    <nav className="topnav" id="myTopnav">
      <NavLink
        onMouseUp={() => resetDropdown()}
        to="/"
        exact
        className="nav-link"
        activeClassName="active-nav"
      >
        <p className="nav-text">Home</p>
      </NavLink>
      <NavLink
        onMouseUp={() => resetDropdown()}
        to="/career"
        className="nav-link"
        activeClassName="active-nav"
      >
        <p className="nav-text">Career</p>
      </NavLink>
      <NavLink
        onMouseUp={() => resetDropdown()}
        to="/portfolio"
        className="nav-link"
        activeClassName="active-nav"
      >
         <p className="nav-text">PortFolio</p>
      </NavLink>
      <NavLink
        onMouseUp={() => resetDropdown()}
        to="/resume"
        className="nav-link"
        activeClassName="active-nav"
      >
         <p className="nav-text">Resume</p>
      </NavLink>
      <NavLink
        onMouseUp={() => resetDropdown()}
        to="/contact"
        className="nav-link"
        activeClassName="active-nav"
      >
         <p className="nav-text">Contact</p>
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
