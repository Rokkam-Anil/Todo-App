import React from 'react';
import './Navbar.css';
import { LuMoonStar } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Navbar = ({ toggleProfileVisibility, isProfileVisible }) => (
  <div className="navbar">
    <button className="menu-button" onClick={toggleProfileVisibility}>
      <span className="menu-icon">
        {isProfileVisible ? '✖' : '☰'} {/* Change icon based on profile visibility */}
      </span>
    </button>
    <div className="logo">
      <img
        src="https://res.cloudinary.com/dgyjutapc/image/upload/v1734071433/logo_wuf8ls.png"
        alt="DoIt Logo"
        className="logo-icon"
      />
    </div>
    <div className="navbar-icons">
      <span className="search-icon"><HiMiniMagnifyingGlass /></span>
      <span className="grid-icon"><CiGrid41 /></span>
      <span className="clock-icon"><LuMoonStar /></span>
    </div>
  </div>
);

export default Navbar;
