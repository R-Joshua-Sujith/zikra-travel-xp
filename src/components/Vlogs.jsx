import React from "react";
import MainNav from "./MainNav";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import imageOne from "../assets/vlogImage-1.png";
import imageTwo from "../assets/vlogImage-2.png";
import { useState } from "react";
import "./Vlogs.css";

const Vlogs = () => {
  const [nextImage, setNextImage] = useState(imageTwo);
  const [currentImage, setCurrentImage] = useState(imageOne);
  const [color, setColor] = useState("FFDE00");
  const [desc, setDesc] = useState("The Dream place of a wanderer");
  const [author, setAuthor] = useState("Chetan Sharma | Manali");
  const [nextAuthor, setNextAuthor] = useState("Wander Williams");
  const change = () => {
    if (currentImage == imageOne) {
      setCurrentImage(imageTwo);
      setNextImage(imageOne);
      setDesc("Remote Villages are the best");
      setAuthor("Wander Williams | FieldsTown");
      setNextAuthor("Chetan Sharma");
      setColor("FF0048");
    } else if (currentImage == imageTwo) {
      setCurrentImage(imageOne);
      setNextImage(imageTwo);
      setColor("FFDE00");
      setAuthor("Chetan Sharma | Manali");
      setNextAuthor("Wander Williams");
      setDesc("The Dream place of a wanderer");
    }
  };
  return (
    <div
      className="main-vlog-container"
      style={{ backgroundColor: `#${color}` }}
      id="vlogs"
    >
      <div className="sub-nav">
        <MainNav color="black" />
      </div>
      <div className="vlogs-container">
        <div className="sub-vlog-container-one">
          <h1>VLOGS</h1>
          <h4>TOP OF THE WEEK PLAYLIST</h4>
          <div>
            <h3>{desc}</h3>
            <p className="author">{author}</p>
            <p className="time">1 Min 25 Sec</p>
          </div>

          <h5>UPNEXT</h5>
          <div
            className="next-movie"
            style={{ backgroundImage: `url(${nextImage})` }}
            onClick={change}
          >
            <div className="next-movie-details">
              <p className="next-movie-author">{nextAuthor}</p>
              <p className="next-movie-time">2min 30 Sec</p>
            </div>
          </div>
          <p className="next-movie-desc"></p>
        </div>
        <div className="sub-vlog-container-two">
          <div
            className="sub-vlog-container-two-background"
            style={{ backgroundImage: `url(${currentImage})` }}
          >
            <div className="play"></div>
          </div>
          <div className="arrow-container">
            <KeyboardArrowUpIcon classsName="switch" onClick={change} />
            <p>1</p>
            <p>/</p>
            <p>5</p>
            <KeyboardArrowDownIcon onClick={change} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vlogs;
