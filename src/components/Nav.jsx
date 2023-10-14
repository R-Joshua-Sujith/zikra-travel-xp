import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user);
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
          {!userStatus && (
            <Link to="/register?value=false">
              <li>Sign in</li>
            </Link>
          )}
          {!userStatus && (
            <Link to="/register?value=true">
              <li>Register</li>
            </Link>
          )}

          {userStatus && (
            <li
              onClick={() => {
                dispatch({ type: "logout" });
                localStorage.clear();
              }}
            >
              Logout
            </li>
          )}
        </ul>
      </nav>
      <div className={`full-nav ${isNavVisible ? "show-nav open" : "close"}`}>
        <a href="#home" className="nav-items" onClick={hideNav}>
          Home
        </a>
        <a href="#vlogs" className="nav-items" onClick={hideNav}>
          Vlogs
        </a>
        <a href="#about" className="nav-items" onClick={hideNav}>
          About Us
        </a>
        <a href="#video" className="nav-items" onClick={hideNav}>
          Demo
        </a>
        <a href="#contact-section-link" className="nav-items" onClick={hideNav}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
