import "./App.css";
import Contact from "./components/Contact";
import Demo from "./components/Demo";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import Vlogs from "./components/Vlogs";
import Video from "./components/Video";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="scroll-container">
      <Home className="scroll-section" />
      <Vlogs className="scroll-section" />
      <Demo className="scroll-section" />
      <Video className="scroll-section" />
      <Contact className="scroll-section" />
    </div>
  );
}

export default App;
