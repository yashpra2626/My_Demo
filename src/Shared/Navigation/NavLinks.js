import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          Podcasts
        </NavLink>
      </li>
      <li>
      <input className="search-bar" type="text" placeholder="Search.."/>
      </li>
     
    </ul>
  );
};

export default NavLinks;
