import React from "react";
import "../styles/Navbar.scss";
import Logo from "../assets/SnelleLogo.jpg";

const NavBar = () => {
  return (
    <nav className="container mt-3">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
