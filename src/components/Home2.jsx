import React from "react";
import "./Home2.css";
import "./Home.css";
import { useState, useEffect } from "react";
import one from "../assets/one.webp";
import two from "../assets/two.webp";
import three from "../assets/three.webp";

import four from "../assets/four.webp";
import five from "../assets/five.webp";
import six from "../assets/six.webp";

import seven from "../assets/seven.webp";
import eight from "../assets/eight.webp";
import nine from "../assets/nine.webp";
import Nav from "./Nav";
import MainNav from "./MainNav";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Home2 = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user);
  const [imageOne, setImageOne] = useState(one);
  const [imageTwo, setImageTwo] = useState(two);
  const [imageThree, setImageThree] = useState(three);
  const [name, setName] = useState("Switzerland");
  const [desc, setDesc] = useState("Best Vacation");
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
      if (imageOne === one) {
        setName("Ladakh");
        setDesc("Best Road Trip");
        setImageOne(four);
        setImageTwo(five);
        setImageThree(six);
      } else if (imageOne === four) {
        setName("Thailand");
        setDesc("Best Nature");
        setAnimation(true);
        setImageOne(seven);
        setImageTwo(eight);
        setImageThree(nine);
      } else if (imageOne === seven) {
        setName("Switzerland");
        setDesc("Best Vacation");
        setImageOne(one);
        setImageTwo(two);
        setImageThree(three);
      }
      setTimeout(() => {
        setAnimation(false);
      }, 2000);
    }, 5000); // 4 seconds in milliseconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [imageOne]);

  const change = () => {
    setAnimation(true);
    if (imageOne === one) {
      setName("Ladakh");
      setDesc("Best Road Trip");
      setImageOne(four);
      setImageTwo(five);
      setImageThree(six);
    } else if (imageOne === four) {
      setName("Thailand");
      setDesc("Best Nature");
      setAnimation(true);
      setImageOne(seven);
      setImageTwo(eight);
      setImageThree(nine);
    } else if (imageOne === seven) {
      setName("Switzerland");
      setDesc("Best Vacation");
      setImageOne(one);
      setImageTwo(two);
      setImageThree(three);
    }
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  };
  return (
    <div className="home-2-container" id="home">
      <div className="main">
        <div className="home-container">
          <div className="sub-nav">
            <MainNav color="white" />
          </div>
          <div className="home-main-container">
            <Nav className="fixed-nav" />
            <div className="container-1">
              <h1>{name}</h1>
              <div className="line"></div>
              <h2>{desc}</h2>
              <div className="view-plan">
                <li className="view-plan-list">View</li>
                <li className="view-plan-list">Plan</li>
              </div>
              {userStatus && (
                <button
                  className="expore"
                  onClick={() => {
                    navigate("/survey");
                  }}
                >
                  Take Survey
                </button>
              )}
              {!userStatus && <button className="expore">Explore</button>}
            </div>
          </div>
          <div className="arrow" onClick={change}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
      <div
        className={` one ${animation ? "one-animation" : ""}`}
        style={{ backgroundImage: `url(${imageOne})` }}
      ></div>
      <div
        className={`two ${animation ? "two-animation" : ""}`}
        style={{ backgroundImage: `url(${imageTwo})` }}
      ></div>
      <div
        className={`three ${animation ? "three-animation" : ""}`}
        style={{ backgroundImage: `url(${imageThree})` }}
      ></div>
    </div>
  );
};

export default Home2;
