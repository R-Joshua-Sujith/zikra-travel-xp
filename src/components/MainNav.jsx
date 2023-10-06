import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Link } from "react-scroll";
import "./MainNav.css";
const MainNav = (props) => {
  return (
    <div className="body">
      <div class="vertical-navbar">
        <Link
          to="home"
          spy={true}
          duration={500}
          smooth={true}
          className="lines"
          style={{ borderColor: props.color }}
          href="#home"
        >
          <p className="linestext" style={{ color: props.color }}>
            Home
          </p>
        </Link>

        <Link
          className="lines"
          style={{ borderColor: props.color }}
          to="vlogs"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          <p className="linestext" style={{ color: props.color }}>
            Vlogs
          </p>
        </Link>
        <Link
          className="lines"
          to="about"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            About Us
          </p>
        </Link>
        <Link
          to="video"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
          className="lines"
          style={{ borderColor: props.color }}
        >
          <p className="linestext" style={{ color: props.color }}>
            How it works
          </p>
        </Link>
        <Link
          className="lines"
          style={{ borderColor: props.color }}
          to="contact"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          <p className="linestext" style={{ color: props.color }}>
            Contact Us
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MainNav;
