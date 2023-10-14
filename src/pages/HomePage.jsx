import React from "react";
import Contact from "../components/Contact";
import Demo from "../components/Demo";
import MainNav from "../components/MainNav";
import Vlogs from "../components/Vlogs";
import Video from "../components/Video";
import "./HomePage.css";
import Home2 from "../components/Home2";

const HomePage = () => {
  return (
    <div className="scroll-container">
      <Home2 />
      <Vlogs />
      <Demo />
      <Video />
      <Contact />
    </div>
  );
};

export default HomePage;
