import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Link } from "react-scroll";
import "./MainNav.css";
import { useEffect } from "react";
const MainNav = (props) => {
  return (
    <div className="body">
      <div class="vertical-navbar">
        <a href="#home" className="lines" style={{ borderColor: props.color }}>
          <p className="linestext" style={{ color: props.color }}>
            Home
          </p>
        </a>

        <a className="lines" style={{ borderColor: props.color }} href="#vlogs">
          <p className="linestext" style={{ color: props.color }}>
            Vlogs
          </p>
        </a>
        <a className="lines" href="#about" style={{ borderColor: props.color }}>
          <p className="linestext" style={{ color: props.color }}>
            About Us
          </p>
        </a>
        <a href="#video" className="lines" style={{ borderColor: props.color }}>
          <p className="linestext" style={{ color: props.color }}>
            How it works
          </p>
        </a>
        <a
          className="lines"
          style={{ borderColor: props.color }}
          href="#contact"
        >
          <p className="linestext" style={{ color: props.color }}>
            Contact Us
          </p>
        </a>
      </div>
    </div>
  );
};

export default MainNav;
