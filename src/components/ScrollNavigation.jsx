// ScrollNavigation.js
import React from "react";
import { Link } from "react-scroll";

const ScrollNavigation = () => {
  return (
    <div className="scroll-navigation">
      <Link
        activeClass="active"
        to="component1"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed to position correctly
        duration={500} // Adjust the duration of the scroll
      >
        Component 1
      </Link>
      <Link
        activeClass="active"
        to="component2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Component 2
      </Link>
    </div>
  );
};

export default ScrollNavigation;
