import React, { useState } from 'react';
import './Navbar.css';
import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Navbar = ({ toggleProfileVisibility, isProfileVisible }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const lightModeLogo =
    "https://res.cloudinary.com/dgyjutapc/image/upload/v1734071433/logo_wuf8ls.png";
  const darkModeLogo =
    "https://res.cloudinary.com/dgyjutapc/image/upload/v1735285009/Screenshot_2024-12-27_130618_zzzgbr.png";

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <button className="menu-button" onClick={toggleProfileVisibility}>
        <span className="menu-icon">
          {isProfileVisible ? '✖' : '☰'}
        </span>
      </button>
      <div className="logo">
        <img
          src={isDarkMode ? darkModeLogo : lightModeLogo}
          alt="DoIt Logo"
          className="logo-icon"
        />
      </div>
      <div className="navbar-icons">
        <span className="search-icon"><HiMiniMagnifyingGlass /></span>
        <span className="grid-icon"><CiGrid41 /></span>
        <span className="theme-icon" onClick={toggleDarkMode}>
          {isDarkMode ? <FiSun /> : <LuMoonStar />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
