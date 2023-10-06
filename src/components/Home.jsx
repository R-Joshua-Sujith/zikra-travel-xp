import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Nav from "./Nav";
import MainNav from "./MainNav";
import imageOne from "../assets/bgImage-1.jpeg";
import imageTwo from "../assets/bgImage-2.jpeg";
import imageThree from "../assets/bgImage-3.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import Vlogs from "./Vlogs";
import Demo from "./Demo";
import Contact from "./Contact";
import Video from "./Video";

const Home = () => {
  const arr = [imageOne, imageTwo, imageThree];
  const [bgImage, setBgImage] = useState(arr[0]);
  const [name, setName] = useState("Switzerland");
  const [desc, setDesc] = useState("BEST VACATION");
  const change = () => {
    if (bgImage == arr[0]) {
      setBgImage(arr[1]);
      setName("Ladakh");
      setDesc("BEST ROAD TRIP");
    } else if (bgImage == arr[1]) {
      setBgImage(arr[2]);
      setName("Thailand");
      setDesc("BEST NATURE");
    } else if (bgImage == arr[2]) {
      setBgImage(arr[0]);
      setName("Switzerland");
      setDesc("BEST VACATION");
    }
  };
  return (
    <div id="home">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="home-container">
          <div className="sub-nav">
            <MainNav color="white" />
          </div>
          <div className="home-main-container">
            <Nav />
            <div className="container-1">
              <h1>{name}</h1>
              <div className="line"></div>
              <h2>{desc}</h2>
              <div className="view-plan">
                <li>View</li>
                <li>Plan</li>
              </div>
              <button className="expore">Explore</button>
            </div>
          </div>
        </div>
        <div className="arrow" onClick={change}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
