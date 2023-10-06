import React from "react";
import "./Video.css";
import MainNav from "./MainNav";
const Video = () => {
  return (
    <div id="video">
      <div className="video-background">
        <div className="video-container-main">
          <div className="sub-nav">
            <MainNav color="white" />
          </div>
          <div className="video-sub-container">
            <h1 className="video-heading">How Travel XP Works?</h1>
            <div className="video-container">
              <div className="video-image">
                <div className="play-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
