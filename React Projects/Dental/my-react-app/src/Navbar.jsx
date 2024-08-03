import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://img.icons8.com/ios/50/000000/tooth.png"
          alt="Tooth Icon"
          className="logo-icon"
        />
        <span className="logo-text">SMILEY</span>
      </div>
      <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="burger" onClick={toggleNav}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
