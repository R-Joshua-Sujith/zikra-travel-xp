import React from "react";
import MainNav from "./MainNav";
import Nav from "./Nav";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import imageOne from "../assets/vlogImage-1.png";
import imageTwo from "../assets/vlogImage-2.png";
import { useState } from "react";
import "../App.css";
import "./Vlogs.css";
import { useSelector } from "react-redux";

const Vlogs = () => {
  const [animation, setAnimation] = useState(false);
  const data = [
    {
      id: 1,
      img: "https://i.ytimg.com/vi/EDap9qxb96k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_ty8guZWMvq-vql1kLClPXZWQhg",
      author: "Allison Anderson",
      time: "13 min 2 sec",
      vlog_title: "Antartica",
      vlog_main_title: "Solo Trip to Antartica",
      src: "https://www.youtube.com/embed/EDap9qxb96k?si=_-2AJTA_vy92DR5-",
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/7NCOKIZ0irg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo0Y6vZMSJThOW8GgTYBNWFBIyHg",
      author: "Allison Anderson",
      time: "8 min 33 sec",
      place: "Mexico",
      vlog_main_title: "Solo Trip to Mexico",
      src: "https://www.youtube.com/embed/7NCOKIZ0irg?si=CVzkATPzy5uF0sZR",
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/sr284c-q8oY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1doRq661c5LCZTge8oYbFW0MhCA",
      author: "Allison Anderson",
      time: "8 min 59 sec",
      place: "Alaska",
      vlog_main_title: "Solo Trip Alaska",
      src: "https://www.youtube.com/embed/sr284c-q8oY?si=wVte0VGU8oK1Wvvi",
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/5gEBSIUKK6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNfUhNmaq1_7SnJoTCb-FZ-MxaAQ",
      author: "Allison Anderson",
      time: "13 min 33 sec",
      place: "South Africa",
      vlog_main_title: "Solo Trip to South Africa",
      src: "https://www.youtube.com/embed/5gEBSIUKK6A?si=TaeKvRShKnC0gx8T",
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/OoXs8gHKZw0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcAM-S0CPkPW2a2CyVMG1EE2Y5CQ",
      author: "Allison Anderson",
      time: "13 min 4 sec",
      place: "Namibia",
      vlog_main_title: "Solo Trip to Namibia",
      src: "https://www.youtube.com/embed/OoXs8gHKZw0?si=paKblcmBX-Ye5NNl",
    },
  ];

  const [index, setIndex] = useState(0);
  const [vlog, setVlog] = useState(data[index]);
  const [nextVlog, setNextVlog] = useState(data[index + 1]);
  const [color, setColor] = useState("FFDE00");

  const switchColor = () => {
    if (color === "FFDE00") {
      setColor("FF0048");
    } else if (color === "FF0048") {
      setColor("FFDE00");
    }
  };
  const inc = () => {
    if (index === data.length - 1) {
    } else {
      setAnimation(true);
      setColor("FF0048");
      setNextVlog(data[index + 2]);
      setVlog(data[index + 1]);
      setIndex((prev) => prev + 1);
      switchColor();
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }
  };
  const dec = () => {
    if (index === 0) {
    } else {
      setAnimation(true);
      setNextVlog(data[index]);
      setVlog(data[index - 1]);
      setIndex((prev) => prev - 1);
      switchColor();
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }
  };

  return (
    <div
      id="vlogs"
      className="main-vlog-container vlogs-section"
      style={{ backgroundColor: `#${color}` }}
    >
      <div className="sub-nav">
        <MainNav color="black" />
      </div>
      <div className="vlogs-container">
        <div className="sub-vlog-container-one">
          <h1>VLOGS</h1>
          <h4>TOP OF THE WEEK PLAYLIST</h4>
          <div>
            <h3>{vlog.vlog_main_title}</h3>
            <p className="author">{vlog.author}</p>
            <p className="time">{vlog.time}</p>
          </div>
          {index != data.length - 1 && (
            <div>
              <h5>UPNEXT</h5>
              <div
                className={`next-movie ${
                  animation ? "next-movie-animation" : ""
                }`}
                style={{ backgroundImage: `url(${nextVlog.img})` }}
                onClick={inc}
              >
                <div className="next-movie-details">
                  <p className="next-movie-author">{nextVlog.place}</p>
                  <p className="next-movie-time">{nextVlog.time}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`sub-vlog-container-two ${
            animation ? "sub-vlog-container-two-animation" : ""
          }`}
        >
          <iframe
            src={vlog.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="sub-vlog-container-two-background"
            // style={{ backgroundImage: `url(${vlog.img})` }}
          >
            <div className="play"></div>
          </iframe>
          <div className="arrow-container">
            <KeyboardArrowUpIcon classsName="switch" onClick={dec} />
            <p>{index + 1}</p>
            <p>/</p>
            <p>5</p>
            <KeyboardArrowDownIcon onClick={inc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vlogs;
