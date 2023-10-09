import React from "react";
import Contact from "../components/Contact";
import Demo from "../components/Demo";
import Home from "../components/Home";
import MainNav from "../components/MainNav";
import Vlogs from "../components/Vlogs";
import Video from "../components/Video";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="scroll-container">
      <Home />
      <Vlogs />
      <Demo />
      <Video />
      <Contact />
    </div>
  );
};

export default HomePage;
