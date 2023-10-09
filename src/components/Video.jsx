import React from "react";
import "./Video.css";
import MainNav from "./MainNav";
const Video = () => {
  return (
    <div className="video-section" id="video">
      <div className="video-background">
        <div className="video-container-main">
          <div className="sub-nav">
            <MainNav color="white" />
          </div>
          <div className="video-sub-container">
            <h1 className="video-heading">How Travel XP Works?</h1>
            <div className="video-container">
              <div className="video-image">
                <iframe
                  src="https://www.youtube.com/embed/sr284c-q8oY?si=6NhHgKIyqj_HR2TP"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="play-image"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
