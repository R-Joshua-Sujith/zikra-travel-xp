import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [isNavVisible, setNavVisible] = useState(false);
  const showNav = () => {
    if (isNavVisible === false) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  };
  const hideNav = () => {
    setNavVisible(false);
  };
  return (
    <div className="main-nav-container">
      <nav>
        <li className="menu" onClick={showNav}>
          {!isNavVisible && <MenuIcon />}
          {isNavVisible && <CloseIcon />}
        </li>
        <ul>
          <Link to="/register?value=false">
            <li>Sign in</li>
          </Link>
          <Link to="/register?value=true">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
      <div className={`full-nav ${isNavVisible ? "show-nav open" : "close"}`}>
        <a className="nav-items" onClick={hideNav} href="#home">
          Home
        </a>
        <a className="nav-items" onClick={hideNav} href="#vlogs">
          Vlogs
        </a>
        <a className="nav-items" onClick={hideNav} href="#about">
          About Us
        </a>
        <a className="nav-items" onClick={hideNav} href="#video">
          Demo
        </a>
        <a className="nav-items" onClick={hideNav} href="#contact">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
