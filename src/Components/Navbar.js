import React from 'react';
import './Navbar.css';
import { LuMoonStar } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => (
  <div className="navbar">
    <button className="menu-button">
      <span className="menu-icon">☰</span>
    </button>
    <div className="logo">
      <img
        src="https://res.cloudinary.com/dgyjutapc/image/upload/v1734071433/logo_wuf8ls.png" // Replace with your logo URL
        alt="DoIt Logo"
        className="logo-icon"
      />
    </div>
    <div className="navbar-icons">
      <span className="search-icon"><HiMiniMagnifyingGlass /></span>
      <span className="grid-icon"><CiGrid41 />
      </span>
      <span className="clock-icon"><LuMoonStar /></span>
    </div>
  </div>
);

export default Navbar;