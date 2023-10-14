import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Link } from "react-scroll";
import "./MainNav.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
const MainNav = (props) => {
  return (
    <div className="body">
      <div class="vertical-navbar">
        <HashLink
          smooth
          to="/#home"
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            Home
          </p>
        </HashLink>

        <HashLink
          smooth
          to="/#vlogs"
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            Vlogs
          </p>
        </HashLink>
        <HashLink
          smooth
          to="/#about"
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            About Us
          </p>
        </HashLink>
        <HashLink
          smooth
          to="/#video"
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            How it works
          </p>
        </HashLink>
        <HashLink
          smooth
          to="/#contact-section-link"
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            Contact Us
          </p>
        </HashLink>
      </div>
    </div>
  );
};

export default MainNav;
