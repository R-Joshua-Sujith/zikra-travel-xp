import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
const Nav = () => {
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
          <li>Sign in</li>
          <li>Register</li>
        </ul>
      </nav>
      <div className={`full-nav ${isNavVisible ? "show-nav" : ""}`}>
        <Link
          className="nav-items"
          onClick={hideNav}
          to="home"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="nav-items"
          onClick={hideNav}
          to="vlogs"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          Vlogs
        </Link>
        <Link
          className="nav-items"
          onClick={hideNav}
          to="about"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          About Us
        </Link>
        <Link
          className="nav-items"
          onClick={hideNav}
          to="video"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          Demo
        </Link>
        <Link
          className="nav-items"
          onClick={hideNav}
          to="contact"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;
